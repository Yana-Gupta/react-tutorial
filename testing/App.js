import React from "react";
import { createRoot } from "react-dom/client"
import About from "./src/components/About";
import New from "./src/components/new"
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom"


const root = createRoot(document.getElementById("root"))

const App = () => {
    return (
        <div>
            <h1> I am human only </h1>
            <Link to="/about">About</Link>
        </div>

    )
}

export default App;

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    }, {
        path: "/about",
        element: <About />
    },
    {
        path: "/new",
        element: <New/>
    }

])


root.render(<RouterProvider router={appRouter} />)