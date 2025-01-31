import { useCallback, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router";

type ParamState = Record<string, string>;

// export default function useParamState<T extends ParamState>(initialState: T) {
//     const [searchParams, setSearchParams] = useSearchParams();
//     const state = initialState

//     for (const [key, value] of searchParams.entries()) {
//         if (key in state)
//             state[key as keyof T] = value as T[keyof T];
//     }

//     const setState = useCallback((newState: Partial<T>) => {
//         setSearchParams(prev => {
//             for (const key in newState)
//                 prev.set(key, newState[key] as string);
//             return prev;
//         })
//     }, [])

//     return [state, setState] as [T, (newState: Partial<T>) => void];
// }



export default function useParamState<T extends ParamState>(initialState: T) {
    const [searchParams, setSearchParams] = useSearchParams();
    for (const [key] of searchParams.entries()) {
        if (key in initialState)
            initialState[key as keyof T] = searchParams.get(key) as T[keyof T];
    }
    const [state, setState] = useState(initialState);

    useEffect(() => {
        for (const key in state)
            searchParams.set(key, state[key]);
        setSearchParams(searchParams)

        return () => {
            for (const key in state)
                searchParams.delete(key);
            setSearchParams(searchParams)
        }
    }, [state])

    return [state, setState] as [T, React.Dispatch<React.SetStateAction<T>>];
}