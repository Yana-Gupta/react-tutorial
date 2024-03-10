import React from "react"
import { Link } from "react-router-dom"


const About = () => {
    return(
        <div>
            <Link to="/about">I am about page</Link>
            <h1> About </h1>
            <form>
                <input placeholder="name" />
                <input />
            </form>
            <button>I am a button</button>
        </div>
    )
}

export default About