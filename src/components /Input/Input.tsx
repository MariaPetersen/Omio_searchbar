import { Dispatch, SetStateAction } from "react"

function Input(props: {
  placeholder: string
  icon: string
  departureToggle: string
  inputType: string
  valueDeparture: string
  setDeparture: Dispatch<SetStateAction<string>>
  valueDestination: string
  setDestination: Dispatch<SetStateAction<string>>
}) {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    props.inputType === "departure" && props.setDeparture(e.target.value)
    props.inputType === "destination" && props.setDestination(e.target.value)
  }

  function handleClick() {
    let temp = props.valueDestination
    props.setDestination(props.valueDeparture)
    props.setDeparture(temp)
  }

  return (
    <div className={"input"}>
      <div className="input--icon">
        <img src={props.icon} alt="" />
      </div>
      <input
        className="input"
        type="text"
        placeholder={props.placeholder}
        value={
          props.inputType === "departure"
            ? props.valueDeparture
            : props.valueDestination
        }
        onChange={handleChange}
      ></input>
      {props.inputType === "departure" && (
        <div>
          <img src={props.departureToggle} alt="" onClick={handleClick} />
        </div>
      )}
    </div>
  )
}

export default Input
