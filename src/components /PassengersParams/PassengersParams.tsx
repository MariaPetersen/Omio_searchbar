import { Dispatch, SetStateAction } from "react"
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa"
import { MouseEventHandler } from "react"

function PassengersParams(props: {
  passengerType: string
  ageRange: string
  passengerTypeNum: number
  onMinus: MouseEventHandler<SVGElement>
  onPlus: MouseEventHandler<SVGElement>
}) {
  return (
    <div>
      <div>
        <span>{props.passengerType}</span>
        <span>{props.ageRange} years</span>
      </div>
      <div>
        <div>
          <FaMinusCircle onClick={props.onMinus} />
        </div>
        <span>{props.passengerTypeNum}</span>
        <FaPlusCircle onClick={props.onPlus} />
      </div>
    </div>
  )
}

export default PassengersParams
