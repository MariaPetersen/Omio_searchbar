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

  setSuggestions: Dispatch<SetStateAction<IData[]>>
}) {
  const [searchParams, setSearchParams] = useState("")

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    props.setCity(e.target.value)
    setSearchParams(e.target.value)
    let url = `https://api.comparatrip.eu/cities/autocomplete/?q=${searchParams}`
    async function fetchData() {
      const response = await fetch(url)
      const data = await response.json()
      console.log(data)
      props.setSuggestions(data)
    }
    fetchData()
  }

  function handleInputClick() {
    async function fetchData() {
      const response = await fetch("https://api.comparatrip.eu/cities/popular/5")
      const data = await response.json()
      console.log(data)
      props.setSuggestions(data)
      props.setShowSuggestions(true)
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
        onChange={handleChange}
        onClick={handleInputClick}
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
