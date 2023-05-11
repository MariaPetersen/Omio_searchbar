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
  adults: number
  setAdults: Dispatch<SetStateAction<number>>
  youth: number
  setYouth: Dispatch<SetStateAction<number>>
  senior: number
  setSenior: Dispatch<SetStateAction<number>>
  hasDiscountcard: boolean
  setHasDiscountcart: Dispatch<SetStateAction<boolean>>
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
        <PassengersParamsContainer
          adults={props.adults}
          setAdults={props.setAdults}
          youth={props.youth}
          setYouth={props.setYouth}
          senior={props.senior}
          setSenior={props.setSenior}
          hasDiscountcard={props.hasDiscountcard}
          setHasDiscountcart={props.setHasDiscountcart}
        />
      )}
    </div>
  )
}

export default ParamsContainer
