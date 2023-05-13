import { render, screen, fireEvent } from '@testing-library/react';
import PassengersParams from './PassengersParams';

describe('PassengersParamsContainer component', () => {
    it('renders passangerParams with listed props', () => {

        render(
            <PassengersParams passengerType="Adults"
                ageRange="18-56"
                passengerTypeNum={3}
                onMinus={() => { }}
                onPlus={() => { }} />
        );

        const number = screen.getByTestId("number-span")
        const passenger = screen.getByTestId("passenger-span")
        const age = screen.getByTestId("age-span")
        expect(number).toHaveTextContent(3)
        expect(passenger).toHaveTextContent("Adults")
        expect(age).toHaveTextContent("18-56")
    });

});
