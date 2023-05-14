import Input from "components /SearchInputComponents/Input/Input"
import { Dispatch, SetStateAction, useState } from "react"
import Suggestions from "components /SearchInputComponents/Suggestions/Suggestions"
import "./styles.scss"

export interface IData {
  id: number
  unique_name: string
  local_name: string
  latitude: number
  longitude: number
  new_id: string
  city_id: number
  gpuid: string
  nb_search: number
  popular: boolean
  iscity: boolean
}

function InputContainer(props: {
  valueDeparture: string
  setDeparture: Dispatch<SetStateAction<string>>
  valueDestination: string
  setDestination: Dispatch<SetStateAction<string>>
}) {
  //States for setting suggestions from API data
  const [suggestions, setSuggestions] = useState<IData[]>([])
  const [showDepSuggestions, setShowDepSuggestions] = useState(false)
  const [showDestSuggestions, setShowDestSuggestions] = useState(false)

  //Swap departure and destination
  function handleSwap() {
    let temp = props.valueDestination
    props.setDestination(props.valueDeparture)
    props.setDeparture(temp)
  }

  //Get 5 suggestion for 5 most popular cities
  function getPopularSuggestions() {
    async function fetchData() {
      try {
        const response = await fetch("https://api.comparatrip.eu/cities/popular/5")
        const data = await response.json()
        setSuggestions(data)
        setShowDepSuggestions(true)
        setShowDestSuggestions(!setShowDestSuggestions)
      } catch {
        return
      }
    }
    fetchData()
  }

  //Get 5 popular destination suggestions from selected departure or if no departure, 5 most popular cities
  function getDestinationSuggestions() {
    async function fetchData() {
      try {
        if (props.valueDeparture) {
          const response = await fetch(
            `https://api.comparatrip.eu/cities/popular/from/${props.valueDeparture}/5`
          )
          const data = await response.json()
          console.log(data)
          setSuggestions(data)
        } else {
          const response = await fetch("https://api.comparatrip.eu/cities/popular/5")
          const data = await response.json()
          console.log(data)
          setSuggestions(data)
        }
      } catch {
        const response = await fetch("https://api.comparatrip.eu/cities/popular/5")
        const data = await response.json()
        console.log(data)
        setSuggestions(data)
      } finally {
        setShowDestSuggestions(true)
        setShowDepSuggestions(!setShowDestSuggestions)
      }
    }
    fetchData()
  }

  return (
    <div className="inputContainer">
      <div>
        <Input
          onSwap={handleSwap}
          inputType="departure"
          valueCity={props.valueDeparture}
          setCity={props.setDeparture}
          placeholder="From: City, Station Or Airport"
          showSuggestions={showDepSuggestions}
          setShowSuggestions={setShowDepSuggestions}
          setSuggestions={setSuggestions}
          onClick={getPopularSuggestions}
        />
        {showDepSuggestions && (
          <div>
            <Suggestions
              setCity={props.setDeparture}
              suggestions={suggestions}
              showSuggestions={showDepSuggestions}
              setShowSuggestions={setShowDepSuggestions}
            />
            <div
              className="blocker"
              onClick={() => setShowDepSuggestions(false)}
            ></div>
          </div>
        )}
      </div>
      <div className="inputContainer--destination">
        <Input
          onSwap={handleSwap}
          inputType="destination"
          valueCity={props.valueDestination}
          setCity={props.setDestination}
          placeholder="To: City, Station Or Airport"
          showSuggestions={showDestSuggestions}
          setShowSuggestions={setShowDestSuggestions}
          setSuggestions={setSuggestions}
          onClick={getDestinationSuggestions}
        />
        {showDestSuggestions && (
          <div>
            <Suggestions
              setCity={props.setDestination}
              suggestions={suggestions}
              showSuggestions={showDestSuggestions}
              setShowSuggestions={setShowDestSuggestions}
            />
            <div
              className="blocker"
              onClick={() => setShowDestSuggestions(false)}
            ></div>
          </div>
        )}
      </div>
    </div>
  )
}

export default InputContainer
