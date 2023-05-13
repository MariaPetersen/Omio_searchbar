import { render, screen, fireEvent } from '@testing-library/react';
import Params from './Params';

describe('Params', () => {
    it('renders closed component by default', () => {
        render(
            <Params
                paramsType="return"
                name="Round trip"
                isOpen={false}
                setIsOpen={() => { }}
                passengers=""
            />
        );
        const closedComponent = screen.getByText('Round trip');
        expect(closedComponent).toBeInTheDocument();
        const closedIcon = screen.getByAltText('open');
        expect(closedIcon).toBeInTheDocument();
        expect(closedIcon).not.toHaveClass('rotated');
    });

    it('opens the component when clicked', () => {
        const setIsOpenMock = jest.fn();
        render(
            <Params
                paramsType="return"
                name="Round trip"
                isOpen={false}
                setIsOpen={setIsOpenMock}
                passengers=""
            />
        );

        const closedComponent = screen.getByText('Round trip');
        fireEvent.click(closedComponent);

        expect(setIsOpenMock).toHaveBeenCalledTimes(1);
        expect(setIsOpenMock).toHaveBeenCalledWith(true);
    });

    it('closes the component when clicked again', () => {
        const setIsOpenMock = jest.fn();
        render(
            <Params
                paramsType="return"
                name="Round trip"
                isOpen={true}
                setIsOpen={setIsOpenMock}
                passengers=""
            />
        );

        const openedComponent = screen.getByText('Round trip');
        fireEvent.click(openedComponent);

        expect(setIsOpenMock).toHaveBeenCalledTimes(1);
        expect(setIsOpenMock).toHaveBeenCalledWith(false);
    });
});