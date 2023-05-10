import DateInput from "../DateInput/DateInput"
import { Dispatch, SetStateAction } from "react"
import { useState, useEffect } from "react"
import "./styles.scss"
import addDays from "date-fns/addDays"
import Datepicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

function DateContainer(props: {
  isRoundtrip: boolean
  setIsRoundtrip: Dispatch<SetStateAction<boolean>>
  selected: string
  setSelected: Dispatch<SetStateAction<string>>
}) {
  const [dateDeparture, setDateDeparture] = useState(new Date())
  const [dateDestination, setDateDestination] = useState(addDays(new Date(), 7))
  const [isDepartureOpen, setIsDepartureOpen] = useState(false)
  const [selectedInput, setSelectedInput] = useState("")

  function dateToString(date: Date) {
    const dateString = date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    })

    return dateString
  }

  function handleClick() {
    props.setIsRoundtrip(true)
    props.setSelected("Round trip")
  }

  return (
    <div className="date--container">
      <div>
        <Datepicker
          showIcon
          onChange={(date: Date) => setDateDeparture(date)}
          selected={dateDeparture}
          dateFormat="EE, MMMM d"
        />
      </div>
      {props.isRoundtrip ? (
        <div
          onClick={() => {
            console.log("test")
          }}
        >
          <Datepicker
            onChange={(date: Date) => setDateDestination(date)}
            selected={dateDestination}
            dateFormat="EE, MMMM d"
          />
        </div>
      ) : (
        <div
          className="datepicker--container"
          onClick={() => {
            handleClick()
          }}
        >
          + Add return
        </div>
      )}
    </div>
  )
}

export default DateContainer
