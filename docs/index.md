---
title: "react-tools"
description: "A collection of useful React hooks for state persistence and UI enhancements."
---

## `react-tools`

**react-tools** is a collection of custom React hooks designed to simplify state management and enhance the user experience. This package provides easy-to-use hooks for persisting state using `localStorage` and URL parameters, making it easier to build dynamic and user-friendly applications.

📦 **NPM Package:** [react-tools on npm](https://www.npmjs.com/package/react-tools)

## **Why Use `react-tools`?**
- 🚀 **State Persistence**: Maintain UI state across page reloads and sessions effortlessly.
- 🌍 **Sharable URLs**: Store state in URL parameters for easy sharing and deep-linking.
- 🔥 **Lightweight & Easy to Use**: Minimal dependencies and straightforward APIs.

## **Hooks Included**

### [`useParamState`](./use_param_state_hook)
Synchronizes component state with URL parameters, allowing state persistence across page reloads and shareable application states.

### [`useLocalStorageState`](./use_local_storage_state_hook)
Syncs component state with `localStorage`, ensuring data retention even after the user closes the browser.

## **Installation**
```sh
npm install react-tools
```

or with Yarn:
```sh
yarn add react-tools
```

## **Usage**
Here's an example of how you can use the hooks from `react-tools`:

```tsx
import { useParamState, useLocalStorageState } from "react-tools";

function App() {
    const [query, setQuery] = useParamState({ search: "" });
    const [theme, setTheme] = useLocalStorageState({ theme: "light" });

    return (
        <div style={{ background: theme.theme === "dark" ? "#333" : "#fff", color: theme.theme === "dark" ? "#fff" : "#000" }}>
            <input
                type="text"
                value={query.search}
                onChange={(e) => setQuery({ search: e.target.value })}
                placeholder="Search..."
            />
            <button onClick={() => setTheme({ theme: theme.theme === "light" ? "dark" : "light" })}>Toggle Theme</button>
        </div>
    );
}
```

## **Conclusion**
The `react-tools` package provides powerful yet simple hooks to enhance state management in React applications. Whether you need URL-based state persistence or local storage synchronization, `react-tools` makes it seamless. 🚀
