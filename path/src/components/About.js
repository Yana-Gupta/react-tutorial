import { useEffect } from "react"

const About = () => {
    useEffect(() => {
        const i = setInterval(() => {
            console.log("Hello")
        }, 1000)
        return () => {
            clearInterval(i)
        }

    }

    )
    return (
        <div>
            <h1> About </h1>

        </div>
    )
}

export default About