// Rendering on screen with the help of React
// Most costly operation - interaction
// => When dom tree is changed - costly operation


// Importing the react and react-dom
import React from "react"
import ReactDOM from "react-dom"


const heading = React.createElement(
    "h1",
    { id: "heading", className: "green-flag" },
    "Hello Element"
)

// console.log(heading)

const root = (ReactDOM.createRoot(document.getElementById("root")))

// Heading is an object but in render it converted back to HTML Type here that is h1

// root.render(heading)


// Writing nested HTML
const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement("div",
        { id: "child" },
        React.createElement(
            "h1",
            {},
            "I am child"
        )
    )
)

// root.render(parent)

// console.log(parent)

// Wriring siblings in nested HTMl
// If mutliple elements to be passed then pass in array
// Also pass the key
// The code is complex
const parent1 = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
        "div",
        { id: "child" },
        [
            React.createElement(
                "h1",
                { key: "1" },
                "I am child"
            ),
            React.createElement(
                "h2",
                { key: "2", id: "heading", className: "green-flag" },
                "I am second child"
            )
        ]
    )
)


// Render is not append 
// It will replace every line of code inside the root
root.render(parent1)

// JSX 


/* 
* React is a library 
* It can be applied to a small piece of code.
* A framework is something that comes fully functional functions or methods
* In this code React is only limited to the root
* We can't use funtionalities of React other than it
*/
