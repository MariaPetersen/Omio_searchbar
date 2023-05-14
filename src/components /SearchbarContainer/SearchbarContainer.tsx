import { useEffect, useState } from "react"
import DateContainer from "components /DateComponents/DateContainer/DateContainer"
import InputContainer from "components /SearchInputComponents/InputContainer/InputContainer"
import SearchButton from "components /GeneralComponents/SearchButton/SearchButton"
import ParamsContainer from "components /ParametersComponents/ParamsContainer/ParamsContainer"
import "./styles.scss"
import AccomodationToggle from "components /GeneralComponents/AcommodationToggle/AccommodationToggle"
import addDays from "date-fns/addDays"
import { PassengerAge } from "utils/types/types"

function SearchbarContainer() {
  //States for round trip settings
  const [selected, setSelected] = useState("Round trip")
  const [isRoundtrip, setIsRoundtrip] = useState(true)

  // States for passengers' settings
  const [adults, setAdults] = useState(1)
  const [youth, setYouth] = useState(0)
  const [senior, setSenior] = useState(0)
  const [hasDiscountcard, setHasDiscountcart] = useState(false)
  const [title, setTitle] = useState("")

  //States for setting input value
  const [valueDeparture, setDeparture] = useState("")
  const [valueDestination, setDestination] = useState("")

  //States for travel dates
  const [dateDeparture, setDateDeparture] = useState(new Date())
  const [dateDestination, setDateDestination] = useState(addDays(new Date(), 7))

  //States for accomodation
  const [includeAccomodation, setIncludeAccomodation] = useState(false)

  useEffect(() => {
    if (senior === 0 && youth === 0) {
      if (hasDiscountcard) {
        getAdultsTitleDiscount()
      } else {
        getAdultsTitleNoDiscount()
      }
    } else {
      if (hasDiscountcard) {
        getPassengersTitleDiscount()
      } else {
        getPassengersTitleNoDiscount()
      }
    }

    //Callback definitions
    function getAdultsTitleDiscount() {
      if (adults > 1) {
        let number = adults.toString()
        setTitle(number + " Adults, Discount card")
      } else {
        let number = adults.toString()
        setTitle(number + " Adult, Discount card")
      }
    }

    function getAdultsTitleNoDiscount() {
      if (adults > 1) {
        let number = adults.toString()
        setTitle(number + " Adults, No discount card")
      } else {
        let number = adults.toString()
        setTitle(number + " Adult, No discount card")
      }
    }

    function getPassengersTitleDiscount() {
      let number = adults + youth + senior
      if (number > 1) {
        let numberString = number.toString()
        setTitle(numberString + " Passengers, Discount card")
      } else {
        let numberString = number.toString()
        setTitle(numberString + " Passenger, Discount card")
      }
    }

    function getPassengersTitleNoDiscount() {
      let number = adults + youth + senior
      if (number > 1) {
        let numberString = number.toString()
        setTitle(numberString + " Passengers, No discount card")
      } else {
        let numberString = number.toString()
        setTitle(numberString + " Passenger, No discount card")
      }
    }
  }, [adults, youth, senior, hasDiscountcard])

  return (
    <div className="container">
      <div className="searchbar">
        <div className="params--all">
          <ParamsContainer
            paramsType="return"
            isRoundtrip={isRoundtrip}
            setIsRoundtrip={setIsRoundtrip}
            name={selected}
            adults={adults}
            setAdults={setAdults}
            youth={youth}
            setYouth={setYouth}
            senior={senior}
            setSenior={setSenior}
            hasDiscountcard={hasDiscountcard}
            setHasDiscountcart={setHasDiscountcart}
            selected={selected}
            setSelected={setSelected}
          />
          <ParamsContainer
            paramsType="passengers"
            isRoundtrip={isRoundtrip}
            setIsRoundtrip={setIsRoundtrip}
            name={title}
            adults={adults}
            setAdults={setAdults}
            youth={youth}
            setYouth={setYouth}
            senior={senior}
            setSenior={setSenior}
            hasDiscountcard={hasDiscountcard}
            setHasDiscountcart={setHasDiscountcart}
            selected={selected}
            setSelected={setSelected}
          />
        </div>
        <div className="searchInput--container">
          <InputContainer
            setDeparture={setDeparture}
            valueDeparture={valueDeparture}
            setDestination={setDestination}
            valueDestination={valueDestination}
          />

          <DateContainer
            setDateDeparture={setDateDeparture}
            dateDeparture={dateDeparture}
            setDateDestination={setDateDestination}
            dateDestination={dateDestination}
            isRoundtrip={isRoundtrip}
            setIsRoundtrip={setIsRoundtrip}
            selected={selected}
            setSelected={setSelected}
          />
          <SearchButton name="Search" />
        </div>
      </div>
      <AccomodationToggle
        setIncludeAccomodation={setIncludeAccomodation}
        includeAccomodation={includeAccomodation}
        text="Enable batmobile transport mode"
      />
    </div>
  )
}

export default SearchbarContainer
