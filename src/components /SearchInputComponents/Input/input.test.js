import { render, screen, fireEvent } from '@testing-library/react'
import Input from './Input'

const placeholder = 'Enter a city'
const valueCity = 'London'

describe('Input render', () => {
  it('renders input with correct placeholder and value', () => {
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

    const inputElement = screen.getByPlaceholderText(placeholder)
    expect(inputElement).toBeInTheDocument()
    expect(inputElement.value).toBe(valueCity)
  })

  it('renders swap icon when input type is departure', () => {
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
    )

    const swapIcon = screen.getByTestId("swapIcon")
    expect(swapIcon).toBeVisible()
  })

  it('does not renders swap icon when input type is departure', () => {
    render(
      <Input
        placeholder={placeholder}
        inputType="destination"
        valueCity={valueCity}
        setCity={() => { }}
        onSwap={() => { }}
        showSuggestions={false}
        setShowSuggestions={() => { }}
        onClick={() => { }}
        setSuggestions={() => { }}
      />
    )

    const swapIcon = screen.queryByTestId("swapIcon")
    expect(swapIcon).not.toBeInTheDocument()
  })
})

describe('Input events', () => {
  it('should be able to type into input', () => {
    render(
      <Input
        placeholder={placeholder}
        inputType="destination"
        setCity={() => { }}
        onSwap={() => { }}
        showSuggestions={false}
        setShowSuggestions={() => { }}
        onClick={() => { }}
        setSuggestions={() => { }}
      />
    )
    const inputElement = screen.getByPlaceholderText(placeholder)
    fireEvent.change(inputElement, { target: { value: "Marseille" } })
    expect(inputElement.value).toBe("Marseille")
  })
})


