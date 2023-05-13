import "./styles.scss"

const DestinationInput = (
  props: React.HTMLProps<HTMLInputElement>,
  ref: React.Ref<HTMLInputElement>
) => {
  return (
    <div>
      <input
        {...props}
        className="datepicker__input datepicker__input--destination"
      />
    </div>
  )
}

export default DestinationInput
