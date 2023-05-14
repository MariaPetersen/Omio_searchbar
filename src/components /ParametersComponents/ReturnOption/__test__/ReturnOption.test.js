import { render, screen, fireEvent } from '@testing-library/react'
import ReturnOption from '../ReturnOption';


describe('ReturnOption', () => {
    it('renders ReturnOption with the name', () => {
        render(
            <ReturnOption
                name="One-way"
                onClick={jest.fn()}
                selected=""
            />
        );

        const optionElement = screen.getByText('One-way')
        expect(optionElement).toBeInTheDocument()

    })
})