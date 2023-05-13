import Input from "components /SearchInputComponents/Input/Input"
import { useState } from "react"
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
        setShowDestSuggestions(!setShowDestSuggestions)
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
        setShowDepSuggestions(!setShowDepSuggestions)
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
          valueCity={valueDeparture}
          setCity={setDeparture}
          placeholder="From: City, Station Or Airport"
          showSuggestions={showDepSuggestions}
          setShowSuggestions={setShowDepSuggestions}
          setSuggestions={setSuggestions}
          onClick={getPopularSugestions}
        />
        {showDepSuggestions && (
          <div>
            <Suggestions
              setCity={setDeparture}
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
          valueCity={valueDestination}
          setCity={setDestination}
          placeholder="To: City, Station Or Airport"
          showSuggestions={showDestSuggestions}
          setShowSuggestions={setShowDestSuggestions}
          setSuggestions={setSuggestions}
          onClick={getDestinationSuggestions}
        />
        {showDestSuggestions && (
          <div>
            <Suggestions
              setCity={setDestination}
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
