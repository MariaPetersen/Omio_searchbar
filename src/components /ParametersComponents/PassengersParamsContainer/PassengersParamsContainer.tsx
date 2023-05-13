import PassengersParams from "components /ParametersComponents/PassengersParams/PassengersParams"
import { Dispatch, SetStateAction } from "react"
import { FaCreditCard } from "react-icons/fa"
import { AiOutlineInfoCircle } from "react-icons/ai"
import "./styles.scss"
import ToggleContainer from "components /GeneralComponents/ToggleContainer/ToggleContainer"

function PassengersParamsContainer(props: {
  adults: number
  setAdults: Dispatch<SetStateAction<number>>
  youth: number
  setYouth: Dispatch<SetStateAction<number>>
  senior: number
  setSenior: Dispatch<SetStateAction<number>>
  hasDiscountcard: boolean
  setHasDiscountcart: Dispatch<SetStateAction<boolean>>
}) {
  function onMinus() {
    if (props.adults >= 1) {
      const newAdults = props.adults - 1
      props.setAdults(newAdults)
    }
  }
  return (
    <div className="passengersParams--container">
      <PassengersParams
        passengerTypeNum={props.adults}
        passengerType="Adult"
        ageRange="26+"
        onMinus={() => {
          if (props.adults >= 1) {
            const newAdults = props.adults - 1
            props.setAdults(newAdults)
          }
        }}
        onPlus={() => {
          const newAdults = props.adults + 1
          props.setAdults(newAdults)
        }}
      />
      <PassengersParams
        passengerTypeNum={props.youth}
        passengerType="Youth"
        ageRange="0-25"
        onMinus={() => {
          if (props.youth >= 1) {
            const newYouth = props.youth - 1
            props.setYouth(newYouth)
          }
        }}
        onPlus={() => {
          const newYouth = props.youth + 1
          props.setYouth(newYouth)
        }}
      />
      <PassengersParams
        passengerTypeNum={props.senior}
        passengerType="Senior"
        ageRange="58+"
        onMinus={() => {
          if (props.senior >= 1) {
            const newSenior = props.senior - 1
            props.setSenior(newSenior)
          }
        }}
        onPlus={() => {
          const newSenior = props.senior + 1
          props.setSenior(newSenior)
        }}
      />
      <div className="discount">
        <div className="discount--text">
          <FaCreditCard className="discount--cardIcon" />
          <span>Add discount card</span>
          <AiOutlineInfoCircle className="discount--infoIcon" />
        </div>
        <ToggleContainer className="toggle--green" />
      </div>
    </div>
  )
}

export default PassengersParamsContainer
