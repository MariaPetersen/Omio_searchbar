import { Dispatch, SetStateAction, createElement, forwardRef } from "react"
import "./styles.scss"
import subDays from "date-fns/subDays"
import Datepicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import DestinationInput from "components /DateComponents/DestinationInput/DestinationInput"
import DepartureInput from "components /DateComponents/DepartureInput/DepartureInput"
import useMediaQuery from "utils/hooks/useMediaQuery"

function DateContainer(props: {
  isRoundtrip: boolean
  setIsRoundtrip: Dispatch<SetStateAction<boolean>>
  selected: string
  setSelected: Dispatch<SetStateAction<string>>
  dateDeparture: Date
  setDateDeparture: Dispatch<SetStateAction<Date>>
  dateDestination: Date
  setDateDestination: Dispatch<SetStateAction<Date>>
}) {
  //MediaQuery to adapt datepicker to screensize
  const isTablet = useMediaQuery("(min-width: 768px)")

  //To add return trip and enable destination input
  function addRoundtrip() {
    props.setIsRoundtrip(true)
    props.setSelected("Round trip")
    console.log("test")
  }

  return (
    <div className="date--all">
      {isTablet ? (
        <Datepicker
          onChange={(date: Date) => props.setDateDeparture(date)}
          selected={props.dateDeparture}
          dateFormat="EE, MMMM d"
          startDate={props.dateDeparture}
          endDate={props.dateDestination}
          customInput={createElement(forwardRef(DepartureInput))}
          monthsShown={2}
          minDate={subDays(new Date(), 0)}
          data-testid="datepicker-departure"
        />
      ) : (
        <Datepicker
          onChange={(date: Date) => props.setDateDeparture(date)}
          selected={props.dateDeparture}
          dateFormat="EE, MMMM d"
          startDate={props.dateDeparture}
          endDate={props.dateDestination}
          customInput={createElement(forwardRef(DepartureInput))}
          minDate={subDays(new Date(), 0)}
          data-testid="datepicker-departure"
        />
      )}

      {props.isRoundtrip && isTablet && (
        <Datepicker
          onChange={(date: Date) => props.setDateDestination(date)}
          selected={props.dateDestination}
          startDate={props.dateDeparture}
          endDate={props.dateDestination}
          dateFormat="EE, MMMM d"
          customInput={createElement(forwardRef(DestinationInput))}
          minDate={subDays(new Date(), 0)}
          monthsShown={2}
          data-testid="datepicker-destination-roundtrip"
        />
      )}
      {props.isRoundtrip && !isTablet && (
        <Datepicker
          onChange={(date: Date) => props.setDateDestination(date)}
          selected={props.dateDestination}
          startDate={props.dateDeparture}
          endDate={props.dateDestination}
          dateFormat="EE, MMMM d"
          customInput={createElement(forwardRef(DestinationInput))}
          minDate={subDays(new Date(), 0)}
          data-testid="datepicker-destination-roundtrip"
        />
      )}
      {!props.isRoundtrip && !isTablet && (
        <div className="datepicker--container" onClick={addRoundtrip}>
          <Datepicker
            onChange={(date: Date) => props.setDateDestination(date)}
            startDate={props.dateDeparture}
            endDate={props.dateDestination}
            dateFormat="EE, MMMM d"
            disabled
            placeholderText="+ Add return"
            customInput={createElement(forwardRef(DestinationInput))}
            minDate={subDays(new Date(), 0)}
            data-testid="datepicker-destination-oneway"
          />
        </div>
      )}
      {!props.isRoundtrip && isTablet && (
        <div className="datepicker--container" onClick={addRoundtrip}>
          <Datepicker
            onChange={(date: Date) => props.setDateDestination(date)}
            startDate={props.dateDeparture}
            endDate={props.dateDestination}
            dateFormat="EE, MMMM d"
            disabled
            placeholderText="+ Add return"
            customInput={createElement(forwardRef(DestinationInput))}
            minDate={subDays(new Date(), 0)}
            data-testid="datepicker-destination-oneway"
          />
        </div>
      )}
    </div>
  )
}

export default DateContainer
