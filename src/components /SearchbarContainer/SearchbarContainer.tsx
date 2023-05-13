import { useEffect, useState } from "react"
import DateContainer from "../DateContainer/DateContainer"
import InputContainer from "../InputContainer/InputContainer"
import SearchButton from "../SearchButton/SearchButton"
import ParamsContainer from "../../components /ParamsContainer/ParamsContainer"
import "./styles.scss"

function SearchbarContainer() {
  const [isRoundtrip, setIsRoundtrip] = useState(true)
  const [adults, setAdults] = useState(1)
  const [youth, setYouth] = useState(0)
  const [senior, setSenior] = useState(0)
  const [hasDiscountcard, setHasDiscountcart] = useState(false)
  const [selected, setSelected] = useState("Round trip")
  const [title, setTitle] = useState("")

  useEffect(() => {
    if (senior === 0 && youth === 0) {
      if (hasDiscountcard) {
        if (adults > 1) {
          let number = adults.toString()
          setTitle(number + " " + "Adults" + ", " + "Discount card")
        } else {
          let number = adults.toString()
          setTitle(number + " " + "Adult" + ", " + "Discount card")
        }
      } else {
        if (adults > 1) {
          let number = adults.toString()
          setTitle(number + " " + "Adults" + ", " + "No discount card")
        } else {
          let number = adults.toString()
          setTitle(number + " " + "Adult" + ", " + "No discount card")
        }
      }
    } else {
      if (hasDiscountcard) {
        let number = adults + youth + senior
        if (number > 1) {
          let numberString = number.toString()
          setTitle(numberString + " " + "Passengers" + ", " + "Discount card")
        } else {
          let numberString = number.toString()
          setTitle(numberString + " " + "Passenger" + ", " + "Discount card")
        }
      } else {
        let number = adults + youth + senior
        if (number > 1) {
          let numberString = number.toString()
          setTitle(numberString + " " + "Passengers" + ", " + "No discount card")
        } else {
          let numberString = number.toString()
          setTitle(numberString + " " + "Passenger" + ", " + "No discount card")
        }
      }
    }
  }, [adults, youth, senior])

  return (
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
      <div>
        <InputContainer />

        <DateContainer
          isRoundtrip={isRoundtrip}
          setIsRoundtrip={setIsRoundtrip}
          selected={selected}
          setSelected={setSelected}
        />
      </div>
      <SearchButton name="Search" />
    </div>
  )
}

export default SearchbarContainer
