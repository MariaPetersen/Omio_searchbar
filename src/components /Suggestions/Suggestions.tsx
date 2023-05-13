import { IData } from "./../InputContainer/InputContainer"
import { Dispatch, SetStateAction } from "react"
import { FaMapMarkerAlt } from "react-icons/fa"
import "./styles.scss"

function Suggestions(props: {
  suggestions: IData[]
  showSuggestions: boolean
  setShowSuggestions: Dispatch<SetStateAction<boolean>>
  setCity: Dispatch<SetStateAction<string>>
}) {
  return (
    <div className="suggestions--container">
      <ul className="suggestions">
        {props.suggestions.map((city, index) => (
          <li
            key={`${city.id}-${index}`}
            onClick={() => {
              props.setCity(city.local_name)
              props.setShowSuggestions(false)
            }}
            className="suggestions--option"
          >
            <FaMapMarkerAlt className="suggestions--icon" key="mapMarker" />
            {city.local_name}
          </li>
        ))}
      </ul>
      <div
        className="blocker"
        onClick={() => {
          props.setShowSuggestions(false)
        }}
      ></div>
    </div>
  )
}

export default Suggestions
