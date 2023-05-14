import { render, screen } from '@testing-library/react';
import DepartureInput from '../DepartureInput';

describe('DepartureInput', () => {
    it('renders the input field with the provided props', () => {
        const props = {
            type: 'date',
            name: 'departure',
            placeholder: 'Select departure date',
            onChange: jest.fn(),
        };
        render(<DepartureInput {...props} />);

        const inputElement = screen.getByPlaceholderText('Select departure date');
        expect(inputElement).toBeInTheDocument();
        expect(inputElement).toHaveAttribute('type', 'date');
        expect(inputElement).toHaveClass('datepicker__input');
        expect(inputElement).toHaveClass('datepicker__input--departure');
        expect(inputElement).toHaveValue('');
    });
});