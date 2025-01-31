---
title: "useParamState"
description: "A custom React hook to synchronize state with URL parameters."
---

## `useParamState` Hook

`useParamState` is a custom React hook that synchronizes component state with URL parameters, ensuring state persistence across page reloads and navigation.

### **Usage**
```tsx
const [state, setState] = useParamState({ count: "0", theme: "light", filter: "all" });
```
- This initializes `state` from URL parameters if present; otherwise, it falls back to the given initial state.
- Updating `state` updates the URL parameters as well.

## **Example Implementations**

### **Pagination Example**
```tsx live
function Pagination() {
    const [state, setState] = useParamState({ page: "1" });

    return (
        <div>
            <h2>Current Page: {state.page}</h2>
            <button onClick={() => setState({ page: String(Number(state.page) - 1) })} disabled={state.page === "1"}>Previous</button>
            <button onClick={() => setState({ page: String(Number(state.page) + 1) })}>Next</button>
        </div>
    );
}

export default Pagination;
```

### **Filter Example**

```tsx live
function Filter() {
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

export default Filter;
```

## **Use Cases**
- **Persisting UI state in URLs**: Useful for keeping track of filters, pagination, themes, or any UI-related state across reloads.
- **Sharing state via URL**: Enables users to share URLs that preserve the state (e.g., a selected tab or a search filter).
- **SEO benefits**: Ensuring state is reflected in the URL can help search engines index relevant states of the page.

## **Conclusion**
The `useParamState` hook helps in maintaining state persistence via URL parameters, making navigation smoother and more user-friendly. 🚀
