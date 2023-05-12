import { Dispatch, MouseEventHandler, SetStateAction } from "react"
import "./styles.scss"
import { FaDotCircle, FaMapMarkerAlt } from "react-icons/fa"
import { useState } from "react"
import { IData } from "components /InputContainer/InputContainer"

function Input(props: {
  placeholder: string
  icon: string
  departureToggle: string
  inputType: string
  valueCity: string
  setCity: Dispatch<SetStateAction<string>>
  onSwap: MouseEventHandler<HTMLElement>
  showSuggestions: boolean
  setShowSuggestions: Dispatch<SetStateAction<boolean>>
  onClick: MouseEventHandler<HTMLElement>
  setSuggestions: Dispatch<SetStateAction<IData[]>>
}) {
  function setSuggestionsFromInput(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target.value)
    props.setCity(e.target.value)
    let url = `https://api.comparatrip.eu/cities/autocomplete/?q=${e.target.value}`
    async function fetchData() {
      const response = await fetch(url)
      const data = await response.json()
      props.setSuggestions(data)
    }
    fetchData()
  }

  return (
    <div className="input">
      <div className="input--icon">
        {props.inputType === "departure" && <FaDotCircle />}
        {props.inputType === "destination" && <FaMapMarkerAlt />}
      </div>
      <input
        className="input"
        type="text"
        placeholder={props.placeholder}
        value={props.valueCity}
        onChange={setSuggestionsFromInput}
        onClick={props.onClick}
      ></input>
      {props.inputType === "departure" && (
        <div>
          <img
            src={props.departureToggle}
            alt=""
            onClick={props.onSwap}
            className="input--swap"
          />
        </div>
      )}
    </div>
  )
}

export default Input
