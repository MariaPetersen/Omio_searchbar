import { IData } from "./../InputContainer/InputContainer"
import { Dispatch, SetStateAction } from "react"
import "./styles.scss"

function Suggestions(props: {
  suggestions: IData[]
  showSuggestions: boolean
  setShowSuggestions: Dispatch<SetStateAction<boolean>>
  setCity: Dispatch<SetStateAction<string>>
}) {
  return (
    <div>
      <ul className="suggestions">
        {props.suggestions.map((city, index) => (
          <li
            key={city.id}
            onClick={() => {
              props.setCity(city.local_name)
              props.setShowSuggestions(false)
            }}
          >
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
