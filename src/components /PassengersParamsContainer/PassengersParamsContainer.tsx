import PassengersParams from "../PassengersParams/PassengersParams"
import { Dispatch, SetStateAction, useEffect } from "react"
import Toggle from "./../Toggle/Toggle"
import { FaCreditCard } from "react-icons/fa"
import { AiOutlineInfoCircle } from "react-icons/ai"
import { MouseEventHandler } from "react"
import { useState, useRef } from "react"
import "./styles.scss"

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
      <div>
        <div>
          <FaCreditCard />
          <span>Add discount card</span>
          <AiOutlineInfoCircle />
        </div>
        <Toggle className="slider slider--blue round" />
      </div>
    </div>
  )
}

export default PassengersParamsContainer
