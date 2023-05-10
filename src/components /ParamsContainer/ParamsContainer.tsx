import Params from "../Params/Params"
import { useState } from "react"
import { Dispatch, SetStateAction } from "react"
import ReturnParams from "../ReturnParams/ReturnParams"
import PassengersParamsContainer from "../PassengersParamsContainer/PassengersParamsContainer"
import "./styles.scss"

function ParamsContainer(props: {
  paramsType: "return" | "passengers"
  isRoundtrip?: boolean | undefined
  setIsRoundtrip: Dispatch<SetStateAction<boolean>>
  selected: {
    travelType: string
    Adults: number
    Youth: number
    Senior: number
    DiscountCard: boolean
  }
  setSelected: Dispatch<
    SetStateAction<{
      travelType: string
      Adults: number
      Youth: number
      Senior: number
      DiscountCard: boolean
    }>
  >
  name: string | []
}) {
  const [isOpen, setIsOpen] = useState(false)

  console.log(isOpen)
  return (
    <div className="params--container">
      <Params
        paramsType={props.paramsType}
        name={props.name}
        setSelected={props.setSelected}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        passengers="Adults"
        isRoundtrip={props.isRoundtrip}
        setIsRoundtrip={props.setIsRoundtrip}
        selected={props.selected}
      />
      {isOpen && props.paramsType === "return" && (
        <ReturnParams
          selected={props.selected}
          setSelected={props.setSelected}
          isRoundtrip={props.isRoundtrip}
          setIsRoundtrip={props.setIsRoundtrip}
        />
      )}
      {isOpen && props.paramsType === "passengers" && (
        <PassengersParamsContainer
          selected={props.selected}
          setSelected={props.setSelected}
        />
      )}
    </div>
  )
}

export default ParamsContainer
