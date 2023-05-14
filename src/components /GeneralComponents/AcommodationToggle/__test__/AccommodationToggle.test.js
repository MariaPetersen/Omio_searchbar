import AccommodationToggle from "../AccommodationToggle";
import { render, screen } from '@testing-library/react'

it('renders accommodation toggle with same text passed into text prop', () => {
    render(<AccommodationToggle text="Add accommodation" />)
    const accomodationElement = screen.getByText(/accommodation/)
    expect(accomodationElement).toBeInTheDocument()
})