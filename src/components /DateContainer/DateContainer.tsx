import {
  Dispatch,
  MouseEventHandler,
  SetStateAction,
  createElement,
  forwardRef,
} from "react"
import { useState, useEffect } from "react"
import "./styles.scss"
import addDays from "date-fns/addDays"
import Datepicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import DestinationInput from "../DestinationInput/DestinationInput"
import DepartureInput from "./../DepartureInput/DepartureInput"
import { Value } from "sass"

function DateContainer(props: {
  isRoundtrip: boolean
  setIsRoundtrip: Dispatch<SetStateAction<boolean>>
  selected: string
  setSelected: Dispatch<SetStateAction<string>>
}) {
  const [dateDeparture, setDateDeparture] = useState(new Date())
  const [dateDestination, setDateDestination] = useState(addDays(new Date(), 7))

  function addRoundtrip() {
    props.setIsRoundtrip(true)
    props.setSelected("Round trip")
  }

  return (
    <div className="date--container">
      <div>
        <Datepicker
          onChange={(date: Date) => setDateDeparture(date)}
          selected={dateDeparture}
          dateFormat="EE, MMMM d"
          startDate={dateDeparture}
          endDate={dateDestination}
          customInput={createElement(forwardRef(DepartureInput))}
        />
      </div>
      {props.isRoundtrip ? (
        <div>
          <Datepicker
            onChange={(date: Date) => setDateDestination(date)}
            selected={dateDestination}
            startDate={dateDeparture}
            endDate={dateDestination}
            dateFormat="EE, MMMM d"
            customInput={createElement(forwardRef(DestinationInput))}
          />
        </div>
      ) : (
        <div
          className="datepicker--container"
          onClick={() => {
            addRoundtrip()
          }}
        >
          <Datepicker
            onChange={(date: Date) => setDateDestination(date)}
            startDate={dateDeparture}
            endDate={dateDestination}
            dateFormat="EE, MMMM d"
            disabled
            placeholderText="+ Add return"
            customInput={createElement(forwardRef(DestinationInput))}
          />
        </div>
      )}
    </div>
  )
}

export default DateContainer
