import { useState } from "react"
import DateContainer from "../DateContainer/DateContainer"
import InputContainer from "../InputContainer/InputContainer"
import SearchButton from "../SearchButton/SearchButton"
import ParamsContainer from "../../components /ParamsContainer/ParamsContainer"
import "./styles.scss"

function SearchbarContainer() {
  const [isRoundtrip, setIsRoundtrip] = useState(true)
  const [names, setNames] = useState({
    travelType: "Round trip",
    adults: 1,
    youth: 0,
    senior: 0,
    discountCard: false,
  })
  const [selected, setSelected] = useState("Round trip")
  return (
    <div>
      <div className="params--all">
        <ParamsContainer
          paramsType="return"
          isRoundtrip={isRoundtrip}
          setIsRoundtrip={setIsRoundtrip}
          name={names.travelType}
          names={names}
          setNames={setNames}
          selected={selected}
          setSelected={setSelected}
        />
        <ParamsContainer
          paramsType="passengers"
          isRoundtrip={isRoundtrip}
          setIsRoundtrip={setIsRoundtrip}
          name="Adults"
          names={names}
          setNames={setNames}
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
