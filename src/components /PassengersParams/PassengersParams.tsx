import { Dispatch, SetStateAction } from "react"
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai"
import { MouseEventHandler } from "react"
import "./styles.scss"

function PassengersParams(props: {
  passengerType: string
  ageRange: string
  passengerTypeNum: number
  onMinus: MouseEventHandler<SVGElement>
  onPlus: MouseEventHandler<SVGElement>
}) {
  return (
    <div className="passenger__option">
      <div className="passenger__text">
        <span className="passenger__text--type" data-testid="passenger-span">
          {props.passengerType}
        </span>
        <span className="passenger__text--age" data-testid="age-span">
          {" "}
          {props.ageRange} years
        </span>
      </div>
      <div className="passenger__number">
        <div>
          {props.passengerTypeNum === 0 ? (
            <AiOutlineMinusCircle
              onClick={props.onMinus}
              className="icon icon--grey"
              data-testid="icon--minus"
            />
          ) : (
            <AiOutlineMinusCircle
              onClick={props.onMinus}
              className="icon icon--minus"
              data-testid="icon--minus"
            />
          )}
        </div>
        <span className="passenger__number--span" data-testid="number-span">
          {props.passengerTypeNum}
        </span>
        <AiOutlinePlusCircle
          onClick={props.onPlus}
          className="icon"
          data-testid="icon--plus"
        />
      </div>
    </div>
  )
}

export default PassengersParams
