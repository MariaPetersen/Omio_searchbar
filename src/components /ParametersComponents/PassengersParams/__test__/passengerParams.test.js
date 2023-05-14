import { render, screen } from '@testing-library/react';
import PassengersParams from '../PassengersParams';

describe('PassengersParamsContainer component', () => {
    it('renders passangerParams with listed props', () => {

        render(
            <PassengersParams passengerType="Adults"
                ageRange="18-56"
                passengerTypeNum={3}
                onMinus={() => { }}
                onPlus={() => { }} />
        );

        const spanElement = screen.getByText(/3/)
        expect(spanElement).toBeInTheDocument()

    });

});
