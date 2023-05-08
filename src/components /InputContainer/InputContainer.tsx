import Input from "../Input/Input"
import { useState } from "react"
import departureToggle from "./../../assets/icons/up-and-down-arrow.png"
import localisationIcon from "./../../assets/icons/localisation-dot.png"

function InputContainer() {
  const [valueDeparture, setDeparture] = useState("")
  const [valueDestination, setDestination] = useState("")

  return (
    <div>
      <Input
        inputType="departure"
        valueDeparture={valueDeparture}
        setDeparture={setDeparture}
        valueDestination={valueDestination}
        setDestination={setDestination}
        placeholder="From: City, Station Or Airport"
        departureToggle={departureToggle}
        icon={localisationIcon}
      />
      <Input
        inputType="destination"
        valueDeparture={valueDeparture}
        setDeparture={setDeparture}
        valueDestination={valueDestination}
        setDestination={setDestination}
        placeholder="To: City, Station Or Airport"
        departureToggle={departureToggle}
        icon={localisationIcon}
      />
    </div>
  )
}

export default InputContainer
