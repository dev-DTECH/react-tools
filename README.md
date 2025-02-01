# reactor-tools

A collection of useful React hooks for state persistence and UI enhancements.

📦 **NPM Package:** [reactor-tools on npm](https://www.npmjs.com/package/reactor-tools)

📖 **Documentation:** [reactor-tools Docs](https://docs.reactor-tools.devdt.in/)

## **Features**
- 🚀 **State Persistence**: Maintain UI state across page reloads and sessions effortlessly.
- 🌍 **Sharable URLs**: Store state in URL parameters for easy sharing and deep-linking.
- 🔥 **Lightweight & Easy to Use**: Minimal dependencies and straightforward APIs.

## **Installation**
```sh
npm install reactor-tools
```

or with Yarn:
```sh
yarn add reactor-tools
```

## **Hooks Included**

### [`useParamState`](./use_param_state_hook)
Synchronizes component state with URL parameters, allowing state persistence across page reloads and shareable application states.

### [`useLocalStorageState`](./use_local_storage_state_hook)
Syncs component state with `localStorage`, ensuring data retention even after the user closes the browser.

## **Usage Example**
```tsx
import { useParamState, useLocalStorageState } from "reactor-tools";

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

## **Contributing**
Contributions are welcome! Feel free to open an issue or submit a pull request.

## **License**
MIT
