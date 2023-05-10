import PassengersParams from "../PassengersParams/PassengersParams"
import { Dispatch, SetStateAction, useEffect } from "react"
import { MouseEventHandler } from "react"
import { useState, useRef } from "react"
import "./styles.scss"

function PassengersParamsContainer(props: {
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
  const [selected, setSelected] = useState({
    travelType: "Round trip",
    adults: 1,
    youth: 0,
    senior: 0,
    discountCard: false,
  })

  return (
    <div className="passengersParams--container">
      <PassengersParams
        passengerTypeNum={selected.adults}
        selected={selected}
        setSelected={setSelected}
        passengerType="Adult"
        ageRange="26+"
        onMinus={() => {
          if (selected.adults >= 1) {
            setSelected({ ...selected, adults: selected.adults - 1 })
          }
          props.setNames({ ...props.names, ...selected })
          console.log(props.names)
        }}
        onPlus={() => {
          setSelected({ ...selected, adults: selected.adults + 1 })
          props.setNames({ ...props.names, ...selected })
          console.log(props.names)
        }}
      />
      <PassengersParams
        passengerTypeNum={selected.youth}
        selected={selected}
        setSelected={setSelected}
        passengerType="Youth"
        ageRange="0-25"
        onMinus={() => {
          if (selected.adults >= 1) {
            setSelected({ ...selected, youth: selected.youth - 1 })
          }
          props.setNames({ ...props.names, ...selected })
          console.log(props.names)
        }}
        onPlus={() => {
          setSelected({ ...selected, youth: selected.youth + 1 })
          props.setNames({ ...props.names, ...selected })
          console.log(props.names)
        }}
      />
      <PassengersParams
        passengerTypeNum={selected.senior}
        selected={selected}
        setSelected={setSelected}
        passengerType="Senior"
        ageRange="58+"
        onMinus={() => {
          if (selected.adults >= 1) {
            setSelected({ ...selected, senior: selected.senior - 1 })
          }
          props.setNames({ ...props.names, ...selected })
          console.log(props.names)
        }}
        onPlus={() => {
          setSelected({ ...selected, senior: selected.senior + 1 })
          props.setNames({ ...props.names, ...selected })
        }}
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
