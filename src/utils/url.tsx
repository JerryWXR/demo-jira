import React, {useMemo} from 'react';
import {URLSearchParamsInit, useSearchParams} from "react-router-dom";
import {cleanObject} from "./index";

const useUrlQueryParams =<K extends string>(keys: K[]) => {
    const [searchParams,setSearchParam] = useSearchParams()
    return [
        useMemo(
            ()=> keys.reduce((prev,key) => {
            return {...prev,[key]:searchParams.get(key) || ''}
            },{} as {[key in K] : string}),
            // eslint-disable-next-line react-hooks/exhaustive-deps
            [searchParams]),
        (params:Partial<{ [key in K] : unknown }>) => {
        const o = cleanObject({ ...Object.fromEntries(searchParams),...params}) as URLSearchParamsInit
        return setSearchParam(o)
        }
    ] as const
};

export default useUrlQueryParams;