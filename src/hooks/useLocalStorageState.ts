import { useEffect, useState } from "react";

type ParamState = Record<string, string>;

function getLocalStorageKeys() {
    return Object.keys(JSON.parse(JSON.stringify(localStorage)));
}

export default function useLocalStorageState<T extends ParamState>(initialState: T) {
    for (const key of getLocalStorageKeys()) {
        if (key in initialState)
            initialState[key as keyof T] = localStorage.getItem(key) as T[keyof T];
    }
    const [state, setState] = useState(initialState);

    useEffect(() => {
        for (const key in state) {
            localStorage.setItem(key, state[key]);
        }

        return () => {
            for (const key in state)
                localStorage.removeItem(key);
        }
    }, [state])

    return [state, setState] as [T, React.Dispatch<React.SetStateAction<T>>];
}