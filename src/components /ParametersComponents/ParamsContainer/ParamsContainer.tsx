import Params from "components /ParametersComponents/Params/Params"
import { useState } from "react"
import { Dispatch, SetStateAction } from "react"
import ReturnParams from "components /ParametersComponents/ReturnParams/ReturnParams"
import PassengersParamsContainer from "components /ParametersComponents/PassengersParamsContainer/PassengersParamsContainer"
import "./styles.scss"
import { PassengerAge } from "utils/types/types"

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
        <div>
          <ReturnParams
            isRoundtrip={props.isRoundtrip}
            setIsRoundtrip={props.setIsRoundtrip}
            selected={props.selected}
            setSelected={props.setSelected}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
          <div
            className="blocker"
            onClick={() => setIsOpen(false)}
            data-testid="return-blocker"
          ></div>
        </div>
      )}
      {isOpen && props.paramsType === "passengers" && (
        <div>
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
          <div
            className="blocker"
            onClick={() => setIsOpen(false)}
            data-testid="passenger-blocker"
          ></div>
        </div>
      )}
    </div>
  )
}

export default ParamsContainer
