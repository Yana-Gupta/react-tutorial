import React from "react";
import { render, screen, act } from "@testing-library/react"
import About from "../About"
import "@testing-library/jest-dom"
import { BrowserRouter } from "react-router-dom";



describe("about page ", () => {

    beforeAll(() => {
        console.log("Hello world")
    })


    beforeEach(() => {
        console.log("---------------------------------------------")
    })

    afterAll(() => {
        console.log("I will run when you will complete all the test case")
    })

    afterEach(() => {
        console.log("I will run after each")
    })

    it("should load about component", () => {
        render(
            <BrowserRouter>
                <About />
            </BrowserRouter>
        );

        const heading = screen.getByRole("heading")

        // Assertion 
        expect(heading).toBeInTheDocument()
    })

    it("should have button element inside about", () => {
        render(<BrowserRouter>
            <About />
        </BrowserRouter>)

        const button = screen.getByRole("button")

        expect(button).toBeInTheDocument()
    })

    it("should have button text element inside about", () => {
        render(<BrowserRouter>
            <About />
        </BrowserRouter>)

        const button = screen.getByText("I am a button")

        expect(button).toBeInTheDocument()
    })

    it("finding input", () => {
        render(<BrowserRouter>
            <About />
        </BrowserRouter>)
        const input = screen.getByPlaceholderText("name");

        expect(input).toBeInTheDocument()

    })

    it("should have 2 input boxes on the contact components", () => {
        render(<BrowserRouter>
            <About />
        </BrowserRouter>)
        const inputs = screen.getAllByRole("textbox")

        expect(inputs.length).toBe(2)
    })

})
