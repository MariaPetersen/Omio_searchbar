import { render, screen } from '@testing-library/react';
import DestinationInput from '../DestinationInput';

describe('DestinationeInput', () => {
    it('renders the input field with the provided props', () => {
        const props = {
            type: 'date',
            name: 'destination',
            placeholder: 'Select destination date',
            onChange: jest.fn(),
        };
        render(<DestinationInput {...props} />);

        const inputElement = screen.getByPlaceholderText('Select destination date');
        expect(inputElement).toBeInTheDocument();
        expect(inputElement).toHaveAttribute('type', 'date');
        expect(inputElement).toHaveClass('datepicker__input');
        expect(inputElement).toHaveClass('datepicker__input--destination');
        expect(inputElement).toHaveValue('');
    });
});