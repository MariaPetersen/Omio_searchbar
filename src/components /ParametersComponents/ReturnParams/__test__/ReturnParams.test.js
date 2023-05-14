import { render, screen, fireEvent } from '@testing-library/react'
import ReturnParams from '../ReturnParams';


describe('ReturnOption', () => {
    it('renders Round trip and One-way options', () => {
        render(
            <ReturnParams
                isRoundtrip={false}
                setIsRoundtrip={jest.fn()}
                selected="One-way"
                setSelected={jest.fn()}
                isOpen={true}
                setIsOpen={jest.fn()}
            />
        );

        const onewayOption = screen.getByText('One-way')
        const roundtripOption = screen.getByText('Round trip')
        expect(onewayOption).toBeInTheDocument()
        expect(roundtripOption).toBeInTheDocument()

    })
})