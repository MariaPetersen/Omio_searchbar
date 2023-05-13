import { Dispatch, MouseEventHandler, SetStateAction } from "react"
import "./styles.scss"
import { FaDotCircle, FaMapMarkerAlt } from "react-icons/fa"
import { TbArrowsSort } from "react-icons/tb"
import { IData } from "components /SearchInputComponents/InputContainer/InputContainer"

function Input(props: {
  placeholder: string
  inputType: string
  valueCity: string
  setCity: Dispatch<SetStateAction<string>>
  onSwap: MouseEventHandler<SVGElement>
  showSuggestions: boolean
  setShowSuggestions: Dispatch<SetStateAction<boolean>>
  onClick: MouseEventHandler<HTMLElement>
  setSuggestions: Dispatch<SetStateAction<IData[]>>
}) {
  function setSuggestionsFromInput(e: React.ChangeEvent<HTMLInputElement>) {
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
    <div className="input__container">
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
          <TbArrowsSort className="input--swap" onClick={props.onSwap} />
        </div>
      )}
    </div>
  )
}

export default Input
