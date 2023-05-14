import "./styles.scss"

//Custom destination input for datepicker
const DestinationInput = (
  props: React.HTMLProps<HTMLInputElement>,
  ref: React.Ref<HTMLInputElement>
) => {
  return (
    <div>
      <input
        {...props}
        className="datepicker__input datepicker__input--destination"
        data-testid="dateInput"
      />
    </div>
  )
}

export default DestinationInput
