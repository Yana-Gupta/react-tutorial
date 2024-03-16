import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./components/Browse";
import Login from "./components/Login";
import Body from "./components/Body";


const App = () => {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Body />
        },
        {
            path: "/browse",
            element: <Browse />
        },
        {
            path: "/login",
            element: <Login />
        }
    ])
    return (
        <RouterProvider router={appRouter}>

            <div className="font-bold"> 
            </div>
        </RouterProvider>

    )
}
export default App