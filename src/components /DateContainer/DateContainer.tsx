import DateInput from "../DateInput/DateInput"
import { Dispatch, SetStateAction } from "react"
import { useState, useEffect } from "react"
import "./styles.scss"
import addDays from "date-fns/addDays"
import Datepicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

function DateContainer(props: {}) {
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

  function handleOnClick() {
    isDepartureOpen ? setIsDepartureOpen(false) : setIsDepartureOpen(true)
    console.log(isDepartureOpen)
  }

  function handleChange(date: Date) {
    setDateDeparture(date)
    const dateDepartureString = dateToString(dateDeparture)
    return dateDepartureString
  }

  const dateDepartureString = dateToString(dateDeparture)
  const dateDestinationString = dateToString(dateDestination)

  console.log(dateDestinationString)
  return (
    <div className="date--container">
      <Datepicker
        showIcon
        onChange={handleChange}
        selected={dateDeparture}
        dateFormat="MM/dd"
      />
      <Datepicker onChange={handleChange} selected={dateDestination} />
    </div>

    // <div >
    //   <div onClick={handleOnClick} className="departure">
    //     {dateDepartureString}
    //   </div>
    //   <Datepicker onChange={handleChange} selected={dateDeparture} />
    //   {isDepartureOpen && (
    //     <Datepicker onChange={handleChange} selected={dateDeparture} />
    //   )}
    //   <div onClick={handleOnClick}>{dateDestinationString}</div>
    // </div>
  )
}

export default DateContainer
