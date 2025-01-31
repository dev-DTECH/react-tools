import useParamState from "@site/src/hooks/useParamState";
import { BrowserRouter } from "react-router-dom";

export function Pagination() {
    const [state, setState] = useParamState({ page: "1" });

    return (
        <div>
            <h2>Current Page: {state.page}</h2>
            <button onClick={() => setState({ page: String(Number(state.page) - 1) })} disabled={state.page === "1"}>Previous</button>
            <button onClick={() => setState({ page: String(Number(state.page) + 1) })}>Next</button>
        </div>
    );
}

export function Filter() {
    const [state, setState] = useParamState({ filter: "all" });

    return (
        <div>
            <h2>Current Filter: {state.filter}</h2>
            <button onClick={() => setState({ filter: "all" })}>All</button>
            <button onClick={() => setState({ filter: "active" })}>Active</button>
            <button onClick={() => setState({ filter: "completed" })}>Completed</button>
        </div>
    );
}

export default function UseParamState() {
    return (
        <BrowserRouter>
            <Pagination />
            <Filter />
        </BrowserRouter>
    );
}