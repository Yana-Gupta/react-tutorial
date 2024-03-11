import React, { useCallback, useMemo, useState } from "react";

import { createRoot } from "react-dom/client"
import { findNthPrime } from "./helper";


const root = createRoot(document.getElementById("root"))


const App = () => {

    const [text, setText] = useState(0)

    const [isDark, setIsDark] = useState(false)
    // const prime = findNthPrime(text)

    const prime = useMemo(() => findNthPrime(text), [text])

    return (
        <div>
            <div style={{
                color: isDark ? "white" : "black",
                backgroundColor: isDark ? "black" : "white"

            }}>

                <h1>Header</h1>
                <input
                    type="number"
                    onChange={(e) => setText(e.target.value)}
                />
                <h1>{prime}</h1>
                <button onClick={() => setIsDark(!isDark)}>
                    Theme changer 
                </button>
            </div>

        </div>
    )
}

root.render(
    <App />
)