import {useEffect, useRef, useState} from 'react';

export const isFalsy = (value:unknown) => value === 0 ? false : !!value
export const cleanObject = (object: {[key: string]: unknown}) => {
    const result = {...object}
    Object.keys(result).forEach(key =>{
        const value = result[key]
        if(isFalsy(value)){
            delete result[key]
        }
    })
    return result
};
export const useMount = (callback:() => void) => {
    useEffect(() => {
        callback()
    },[])
}
export const useDebounce =<V> (value:V,delay?:number):any => {
    const [debouncedValue,setDebouncedValue] = useState(value)
    useEffect(() => {
        const timeout = setTimeout(() =>
            setDebouncedValue(value),delay)
            return () => clearTimeout(timeout)
    },[value])
    return debouncedValue
}
export const useDocumentTitle = (title:string,keepOnmount:boolean=true) => {
    const oldTitle = useRef(document.title).current
    // const oldTitle = document.title
    useEffect(() => {
        document.title=title
    },[title])
    useEffect(() => {
        return () => {
            if(!keepOnmount){
                document.title = oldTitle
            }
        }

    },[keepOnmount,oldTitle])
}
export const resetRoute = () => window.location.href=window.location.origin

export const useMountedRef = () => {
    const mountedRef = useRef(false)

    useEffect(() => {
        mountedRef.current=true
        return () => {
            mountedRef.current=false
        }
    })
    return mountedRef
}