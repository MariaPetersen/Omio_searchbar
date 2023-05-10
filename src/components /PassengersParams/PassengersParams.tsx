import { Dispatch, SetStateAction } from "react"

function PassengersParams(props: {
  passengerType: string
  ageRange: string
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
      <div>
        <span>{props.passengerType}</span>
        <span>{props.ageRange} years</span>
      </div>
      <div></div>
    </div>
  )
}

export default PassengersParams
