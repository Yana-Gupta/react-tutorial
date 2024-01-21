import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import { Foot as Footer } from "./components/Body"
import Body from "./components/Body"
import About from "./components/About"
import Contact from "./components/Contactus"
import ErrorComponent from "./components/Error"
import RestaurantMenu from "./components/RestaurantMenu"
// It can also be imported by this but here it will be imported from Body.js cause default as export is used there to test
// import Footer from "./components/Footer"


// You need to provide the router to the RouterProvider
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"


const root = ReactDOM.createRoot(document.getElementById("root"))




/* 
*
*
*
*
* Conflict Driven UI 
* - Data is sent from backend and as per the data the UI is changed
*
*
*
*
*/





/*
* 
* not using keys <<<<< index as key <<<<< unique id as key
* 
*/


const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}



const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />

            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contactus",
                element: <Contact />
            },
            {
                // The dynamic path 
                path: "/restaurant/:id",
                element: <RestaurantMenu />


            }
        ],
        errorElement: <ErrorComponent />
    },
    
])



root.render(
    <RouterProvider router={appRouter} />
)
