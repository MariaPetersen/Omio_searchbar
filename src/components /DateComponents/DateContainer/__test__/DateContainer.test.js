
import matchMedia from "__mock__/matchMedia.mock.js"
import DateContainer from "../DateContainer";
import { screen, render, fireEvent } from "@testing-library/react"
import { format } from 'date-fns'

describe("DateContainer", () => {
    it("should render 2 date inputs", () => {
        render(<DateContainer />)

        const dateInputs = screen.getAllByTestId("dateInput")
        expect(dateInputs.length).toBe(2)
    })
})
