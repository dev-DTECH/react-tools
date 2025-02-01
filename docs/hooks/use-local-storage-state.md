---
title: "useLocalStorageState"
description: "A custom React hook to synchronize state with localStorage."
---

## `useLocalStorageState` Hook

`useLocalStorageState` is a custom React hook that synchronizes component state with `localStorage`, ensuring state persistence across page reloads and sessions.

### **Usage**
```tsx
const [state, setState] = useLocalStorageState({ count: "0", theme: "light" });
```
- This initializes `state` from `localStorage` if present; otherwise, it falls back to the given initial state.
- Updating `state` updates the `localStorage` values as well.

## **Example Implementations**

### **Counter Example**

```tsx live
function Counter() {
    const [state, setState] = useLocalStorageState({ count: "0" });

    return (
        <div>
            <h2>Counter: {state.count}</h2>
            <button onClick={() => setState({ count: String(Number(state.count) + 1) })}>+</button>
            <button onClick={() => setState({ count: String(Number(state.count) - 1) })}>-</button>
        </div>
    );
}

export default Counter;
```

### **Theme Selector Example**

```tsx live
function ThemeSelector() {
    const [state, setState] = useLocalStorageState({ theme: "light" });

    return (
        <div style={{ background: state.theme === "dark" ? "#333" : "#fff", color: state.theme === "dark" ? "#fff" : "#000", padding: "20px" }}>
            <h2>Current Theme: {state.theme}</h2>
            <button onClick={() => setState({ theme: "light" })}>Light Mode</button>
            <button onClick={() => setState({ theme: "dark" })}>Dark Mode</button>
        </div>
    );
}

export default ThemeSelector;
```

## **Use Cases**
- **Persisting UI state across sessions**: Useful for keeping track of user preferences, theme settings, and other UI-related state even after closing the browser.
- **Reducing backend dependency**: Local storage helps store frequently accessed data without requiring API calls.
- **Improved user experience**: Restores the last known state upon returning to the app.

## **Conclusion**
The `useLocalStorageState` hook provides an easy way to persist state using `localStorage`, making web applications more user-friendly and consistent. 🚀
