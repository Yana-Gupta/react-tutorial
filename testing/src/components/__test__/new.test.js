import { render, screen, act, fireEvent, getByText } from "@testing-library/react"
import "@testing-library/jest-dom"
import New from "../new"


global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () =>  Promise.resolve(MOCK_DATA)
    })
})


describe("new page", () => {
    it ( "should render the new page and able to change the heading", async () => {
        await act(
            async () => render(
                <New />
            )
        )
        const button = screen.getByRole("button");
        const heading = screen.getByRole("heading");
        
        expect(button).toBeInTheDocument()
        expect(getByText(heading, "this is a")).toBeTruthy()

        fireEvent.click(button);

        expect(getByText(heading, "this is not a a")).toBeTruthy()
    })
})
