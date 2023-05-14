import matchMedia from "__mock__/matchMedia.mock.js"
import { fireEvent, getAllByTestId, render, screen } from '@testing-library/react';
import SearchbarContainer from '../SearchbarContainer';

describe('SearchbarContainer Inputs', () => {
    it('should show suggestions when click in the input', async () => {
        render(<SearchbarContainer />)

        const inputElement = screen.getByPlaceholderText(/From/)
        fireEvent.click(inputElement)
        const suggestions = await screen.findByRole("list")
        await expect(suggestions).toBeInTheDocument()
    })

    it('should show suggestions containing what is written in input', async () => {
        render(<SearchbarContainer />)

        const inputElement = screen.getByPlaceholderText("From: City, Station Or Airport")
        fireEvent.click(inputElement)
        fireEvent.change(inputElement, { target: { value: "Par" } })
        const suggestions = await screen.findByRole("list")
        await expect(suggestions).toHaveTextContent(/Par/)
    })

    it('should show popular destination suggestions from selected departurewhen destinaiton input clicked', async () => {
        render(<SearchbarContainer />)

        const departureInput = screen.getByPlaceholderText("From: City, Station Or Airport")
        const destinationInput = screen.getByPlaceholderText("To: City, Station Or Airport")
        fireEvent.change(departureInput, { target: { value: "Paris" } })
        fireEvent.click(destinationInput)
        const suggestions = await screen.findByRole("list")
        await expect(suggestions).toBeInTheDocument()
    })

    it('should swat the destination and departure value when clicking on swap icon', () => {
        render(<SearchbarContainer />)

        const departureInput = screen.getByPlaceholderText("From: City, Station Or Airport")
        const destinationInput = screen.getByPlaceholderText("To: City, Station Or Airport")
        const swapIcon = screen.getByTestId("swapIcon")
        fireEvent.change(departureInput, { target: { value: "Paris" } })
        fireEvent.change(destinationInput, { target: { value: "Marseille" } })
        fireEvent.click(swapIcon)
        expect(departureInput.value).toBe("Marseille")
    })
})

describe('Searchbar Params', () => {

    it('should show check when one-way is selected', async () => {
        render(<SearchbarContainer />)

        const roundtripOption = screen.getByText("Round trip")
        fireEvent.click(roundtripOption)
        const onewayOption = screen.getByText("One-way")
        fireEvent.click(onewayOption)
        expect(screen.queryByText("Round trip")).not.toBeInTheDocument()
    })

    it("should close return params when clicked outside", () => {
        render(<SearchbarContainer />)

        const returnParams = screen.getByText("Round trip")
        fireEvent.click(returnParams)
        const outsideParams = screen.getByTestId("return-blocker")
        fireEvent.click(outsideParams)
        expect(screen.queryByAltText('One-way')).not.toBeInTheDocument()

    })

    it('should change number of adults when clicked', () => {
        render(<SearchbarContainer />)

        const passengerParams = screen.getByText(/Adult/i)
        fireEvent.click(passengerParams)
        const plusIcons = screen.getAllByTestId("icon--plus")
        const passengerNumbers = screen.getAllByTestId("number-span")
        fireEvent.click(plusIcons[0])
        fireEvent.click(plusIcons[0])
        expect(passengerNumbers[0]).toHaveTextContent(3)
    })

    it('should change number of youth when clicked', () => {
        render(<SearchbarContainer />)

        const passengerParams = screen.getByText(/Adult/i)
        fireEvent.click(passengerParams)
        const plusIcons = screen.getAllByTestId("icon--plus")
        const passengerNumbers = screen.getAllByTestId("number-span")
        fireEvent.click(plusIcons[1])
        fireEvent.click(plusIcons[1])
        expect(passengerNumbers[1]).toHaveTextContent(2)
    })

    it('should change number of senior when clicked', () => {
        render(<SearchbarContainer />)

        const passengerParams = screen.getByText(/Adult/i)
        fireEvent.click(passengerParams)
        const plusIcons = screen.getAllByTestId("icon--plus")
        const passengerNumbers = screen.getAllByTestId("number-span")
        fireEvent.click(plusIcons[2])
        fireEvent.click(plusIcons[2])
        expect(passengerNumbers[2]).toHaveTextContent(2)
    })

    it("should close params when clicked outside", () => {
        render(<SearchbarContainer />)

        const passengerParams = screen.getByText(/Adult/i)
        fireEvent.click(passengerParams)
        const outsideParams = screen.getByTestId("passenger-blocker")
        fireEvent.click(outsideParams)
        expect(screen.queryByAltText('Youth')).not.toBeInTheDocument()

    })
})

describe('SearchbarContainer Accommodation Toggle', () => {
    render(<SearchbarContainer />)

    const toggle = screen.getByTestId("toggle")
    fireEvent.click(toggle)
    expect(toggle.value).toBe("on")
})
