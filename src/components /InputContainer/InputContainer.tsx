import Input from "../Input/Input"
import { useState } from "react"
import departureToggle from "./../../assets/icons/up-and-down-arrow.png"
import localisationIcon from "./../../assets/icons/localisation-dot.png"
import Suggestions from "./../Suggestions/Suggestions"

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

function InputContainer() {
  const [valueDeparture, setDeparture] = useState("")
  const [valueDestination, setDestination] = useState("")
  const [suggestions, setSuggestions] = useState<IData[]>([])
  const [showDepSuggestions, setShowDepSuggestions] = useState(false)
  const [showDestSuggestions, setShowDestSuggestions] = useState(false)

  function handleSwap() {
    let temp = valueDestination
    setDestination(valueDeparture)
    setDeparture(temp)
  }

  function getPopularSugestions() {
    async function fetchData() {
      try {
        const response = await fetch("https://api.comparatrip.eu/cities/popular/5")
        const data = await response.json()
        console.log(data)
        setSuggestions(data)
        setShowDepSuggestions(true)
      } catch {
        return
      }
    }
    fetchData()
  }
  function getDestinationSuggestions() {
    async function fetchData() {
      try {
        if (valueDeparture) {
          const response = await fetch(
            `https://api.comparatrip.eu/cities/popular/from/${valueDeparture}/5`
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
      }
    }
    fetchData()
  }

  return (
    <div>
      <div>
        <Input
          onSwap={handleSwap}
          inputType="departure"
          valueCity={valueDeparture}
          setCity={setDeparture}
          placeholder="From: City, Station Or Airport"
          departureToggle={departureToggle}
          icon={localisationIcon}
          showSuggestions={showDepSuggestions}
          setShowSuggestions={setShowDepSuggestions}
          setSuggestions={setSuggestions}
          onClick={getPopularSugestions}
        />
        {showDepSuggestions && (
          <Suggestions
            setCity={setDeparture}
            suggestions={suggestions}
            showSuggestions={showDepSuggestions}
            setShowSuggestions={setShowDepSuggestions}
          />
        )}
      </div>
      <div>
        <Input
          onSwap={handleSwap}
          inputType="destination"
          valueCity={valueDestination}
          setCity={setDestination}
          placeholder="To: City, Station Or Airport"
          departureToggle={departureToggle}
          icon={localisationIcon}
          showSuggestions={showDestSuggestions}
          setShowSuggestions={setShowDestSuggestions}
          setSuggestions={setSuggestions}
          onClick={getDestinationSuggestions}
        />
        {showDestSuggestions && (
          <Suggestions
            setCity={setDestination}
            suggestions={suggestions}
            showSuggestions={showDestSuggestions}
            setShowSuggestions={setShowDestSuggestions}
          />
        )}
      </div>
    </div>
  )
}

export default InputContainer
