import { render, screen, fireEvent } from '@testing-library/react';
import Input from './Input';

describe('Input component', () => {
  it('renders input with correct placeholder and value', () => {
    const placeholder = 'Enter a city';
    const valueCity = 'London';
    render(
      <Input
        placeholder={placeholder}
        inputType="departure"
        valueCity={valueCity}
        setCity={() => { }}
        onSwap={() => { }}
        showSuggestions={false}
        setShowSuggestions={() => { }}
        onClick={() => { }}
        setSuggestions={() => { }}
      />
    );

    const inputElement = screen.getByPlaceholderText(placeholder);
    expect(inputElement).toBeInTheDocument();
    expect(inputElement.value).toBe(valueCity);
  })
})



