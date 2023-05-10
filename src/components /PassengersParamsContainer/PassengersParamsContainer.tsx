import PassengersParams from "../PassengersParams/PassengersParams"
import { Dispatch, SetStateAction } from "react"

function PassengersParamsContainer(props: {
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
}) {
  return (
    <div>
      <PassengersParams
        selected={props.selected}
        setSelected={props.setSelected}
        passengerType="Adult"
        ageRange="26+"
      />
      <PassengersParams
        selected={props.selected}
        setSelected={props.setSelected}
        passengerType="Youth"
        ageRange="0-25"
      />
      <PassengersParams
        selected={props.selected}
        setSelected={props.setSelected}
        passengerType="Senior"
        ageRange="58+"
      />
      <div>
        <div>
          <img />
          <span>Add discount card</span>
          <img />
        </div>
        <img />
      </div>
    </div>
  )
}

export default PassengersParamsContainer
