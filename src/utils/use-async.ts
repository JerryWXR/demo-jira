import { useState } from "react";

interface State<D> {
    error: Error | null;
    data: D | null;
    stat: "idle" | "loading" | "error" | "success";
}

const defaultInitialState: State<null> = {
    stat: "idle",
    data: null,
    error: null,
};

const defaultConfig = {
    throwOnError: false,
};

export const useAsync = <D>(
    initialState?: State<D>,
    initialConfig?: typeof defaultConfig
) => {
    const config = {
        ...defaultConfig,
        ...initialConfig,
    };
    const [state, setState] = useState<State<D>>({
        ...defaultInitialState,
        ...initialState,
    });

    // 想办法把run中传入的promise记住，等到下一次跑的时候就使用上一次的promise
    // `useState`直接传入函数的含义是惰性初始化，所以要用`useState`保存函数，不能直接传入函数，但是我们可以再套一层函数来实现
    // https://codesandbox.io/s/blissful-water-230u4?file=/src/App.js
    const [retry, setRetry] = useState(() => () => {});

    const setData = (data: D) =>
        setState({
            data,
            stat: "success",
            error: null,
        });

    const setError = (error: Error|null) =>
        setState({
            data: null,
            stat: "error",
            error,
        });

    const run = (
        promise: Promise<D>,
        runCofing?: { retry: () => Promise<D> }
    ) => {
        if (!promise || !promise.then) {
            throw new Error("请输入 Promise 类型数据");
        }
        setRetry(() => () => {
            if (runCofing?.retry) {
                run(runCofing?.retry(), runCofing);
            }
        });
        setState({ ...state, stat: "loading" });
        return promise
            .then((data) => {
                setData(data);
                return data;
            })
            .catch((error) => {
                // catch会消化异常，如果不主动抛出，外面是接收不到异常的
                setError(error);
                if (config.throwOnError) {
                    return Promise.reject(error);
                }
                return error;
            });
    };

    return {
        isIdle: state.stat === "idle",
        isLoading: state.stat === "loading",
        isError: state.stat === "error",
        isSuccess: state.stat === "success",
        run,
        setData,
        setError,
        // retry 被调用时重新跑一遍run，让state刷新一遍
        retry,
        ...state,
    };
};
