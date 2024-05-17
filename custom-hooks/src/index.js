import React from "react"
import { createRoot } from "react-dom/client"
import useFetchData from "./hooks/usefetchdata"

const App = () => {

    const data = useFetchData()
    return (
        <>
            {data.length}

            {data && data.map((item, idx) => (<div key={idx}> item </div>))}
        </>
    )
}

createRoot(document.getElementById("root")).render(<App />)