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
        let number = adults.toString()
        setTitle("Adults" + " " + number + ", " + "Discount card")
      } else {
        let number = adults.toString()
        setTitle("Adults" + " " + number + ", " + "No discount card")
      }
    } else {
      if (hasDiscountcard) {
        let number = adults + youth + senior
        let numberString = number.toString()
        setTitle("Passengers" + " " + numberString + ", " + "Discount card")
      } else {
        let number = adults + youth + senior
        let numberString = number.toString()
        setTitle("Passengers" + " " + numberString + ", " + "No discount card")
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
        <div className="date--all">
          <DateContainer
            isRoundtrip={isRoundtrip}
            setIsRoundtrip={setIsRoundtrip}
            selected={selected}
            setSelected={setSelected}
          />
        </div>
      </div>
      <SearchButton name="Search" />
    </div>
  )
}

export default SearchbarContainer
