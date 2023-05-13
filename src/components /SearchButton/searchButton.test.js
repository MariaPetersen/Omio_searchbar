import { render, screen } from '@testing-library/react';
import SearchButton from './SearchButton';

describe('SearchButton', () => {
    it('renders the button with the provided name', () => {
        const name = 'Search';
        render(<SearchButton name={name} />);

        const buttonElement = screen.getByRole('button', { name });
        expect(buttonElement).toBeInTheDocument();
    });

    it('has the correct CSS class', () => {
        const name = 'Search';
        render(<SearchButton name={name} />);

        const buttonElement = screen.getByRole('button', { name });
        expect(buttonElement).toHaveClass('searchButton');
    });
});
