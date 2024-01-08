import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import {Foot as Footer} from "./components/Body"
import Body from "./components/Body"
// It can also be imported by this but here it will be imported from Body.js cause default as export is used there to test
// import Footer from "./components/Footer"


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
            <Body />
            <Footer />
        </div>
    )
}


root.render(
    <AppLayout />
)
