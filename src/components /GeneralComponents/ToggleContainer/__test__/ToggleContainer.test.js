import { render, screen, fireEvent } from '@testing-library/react'
import ToggleContainer from '../ToggleContainer';
import { click } from '@testing-library/user-event/dist/click';

describe('Toggle', () => {
    it('shows the toggle unchecked at render', () => {
        render(<ToggleContainer icons={false}
            className="toggle"
            onChange={jest.fn()} />)

        const toggleElement = screen.getByTestId('toggle')
        expect(toggleElement).not.toBeChecked()
    });

    it('should check the toggle on click', () => {
        let mockIsChecked = false
        const mockSetIsChecked = () => { mockIsChecked = !mockIsChecked }
        render(<ToggleContainer icons={false}
            className="toggle"
            onChange={mockSetIsChecked}
            checked={mockIsChecked} />)

        const toggleElement = screen.getByTestId('toggle')
        fireEvent.click(toggleElement)
        expect(toggleElement).toBeChecked()

    })
})
