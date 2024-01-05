import React from "react";
import ReactDOM from "react-dom/client"


// This is the core of react
// ReactDOM.createRoot(document.getElementById("root")).render(React.createElement("h1", {}, "Namaste React 🚀"))

const root = ReactDOM.createRoot(document.getElementById("root"))

// A react element is not HTML element 
// it is React.createElement
// When a react element is rendered onto the DOM then it becomes HTML element
// React.createElement === Object ( true )
// Converted to HTML when DOM renderes it 


// The JSX syntax 
// The javascript syntax which makes it easy to create JavaScript objects 


// JSX is not HTML inside JavaScript 
// But it is JavaScript
// ✅ It is HTML or XML like syntax inside JavaScript
// This HTML h1 tag is JSX 
// JSX is syntax and React Element is 
// JS Engine can not understand this JSX code and this code is transpiled before reaching the JS Engine 
// It is transpiled by Babel one of dependencies of Babel
// JSX => Object by Babel => HTML by render
// const heading = React.createElement("h1", {id: "heading"}, "Namaste React")
// React Element
// const jsxHeading = <h1 id="heading" className="red-flag"> React using JSX 🚀</h1>
// heading === jsxHeading 
// it is true
// root.render(jsxHeading)

// React Components
// Class Based Component  - OLD - NOT USED NOW - WHEN HOOKS WERE NOT INTRODUCED, THEN WE USED TO USE CLASS BASED COMPONENTS

// Functional Component - NEW


// Functional Component for our APP
// React Component
const AppInfo = () => (
    <div>
        <h3>
            {/* 
            *
            *
            * It will create a infintite loop as we are rendering the AppInfo inside App and again rendering APP Component inside AppInfo 
            * 
            */}
            {/* <APP /> */}
            I am the information about this page
        </h3>
    </div>
)

const heading =
    (<div>This is heading
        <AppInfo />
    </div>)

const APP = () => (
    <div>
        <h1>
            I am a React Component. Finally
        </h1>
        {/* This injection of a component inside another component is known as Component Composition */}
        {/* You can write JavaScript Inside curly braces in JSX */}
        <AppInfo />
        {10 === 11 ? "not equal" : "equal"}
        {heading}
    </div>
)

console.log(APP)


// Difference between React Element and React Component
// You can pass R.E directly in the render function 
// For R.C you need to pass it with tags 
// That's how Babel understands what is React Component and React Element
// You can also provide a Component inside Element
root.render(
    <React.StrictMode>
        <APP />
    </React.StrictMode>
)


// JSX is really powefull 
// These type of attack are known as cross site scripting attack
// As some developer can get access to the localstorage, session storage, etc of your website so they can steal your cookies 
// Whenever any data is passed inside any curly braces then jsx will santize it for us 
