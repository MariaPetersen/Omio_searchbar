import Params from "../Params/Params"
import { useState } from "react"
import { Dispatch, SetStateAction } from "react"
import ReturnParams from "../ReturnParams/ReturnParams"
import PassengersParamsContainer from "../PassengersParamsContainer/PassengersParamsContainer"
import "./styles.scss"
import { MouseEventHandler } from "react"

function ParamsContainer(props: {
  paramsType: "return" | "passengers"
  isRoundtrip: boolean
  setIsRoundtrip: Dispatch<SetStateAction<boolean>>
  selected: string
  setSelected: Dispatch<SetStateAction<string>>
  name: string | []
  names: {
    travelType: string
    adults: number
    youth: number
    senior: number
    discountCard: boolean
  }
  setNames: Dispatch<
    SetStateAction<{
      travelType: string
      adults: number
      youth: number
      senior: number
      discountCard: boolean
    }>
  >
}) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="params--container">
      <Params
        paramsType={props.paramsType}
        name={props.name}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        passengers="Adults"
        isRoundtrip={props.isRoundtrip}
        setIsRoundtrip={props.setIsRoundtrip}
      />
      {isOpen && props.paramsType === "return" && (
        <ReturnParams
          isRoundtrip={props.isRoundtrip}
          setIsRoundtrip={props.setIsRoundtrip}
          selected={props.selected}
          setSelected={props.setSelected}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      )}
      {isOpen && props.paramsType === "passengers" && (
        <PassengersParamsContainer names={props.names} setNames={props.setNames} />
      )}
    </div>
  )
}

export default ParamsContainer
