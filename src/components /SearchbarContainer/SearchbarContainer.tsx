import { useState } from "react"
import DateContainer from "../DateContainer/DateContainer"
import InputContainer from "../InputContainer/InputContainer"
import SearchButton from "../SearchButton/SearchButton"
import ParamsContainer from "../../components /ParamsContainer/ParamsContainer"
import "./styles.scss"

function SearchbarContainer() {
  const [isRoundtrip, setIsRoundtrip] = useState(true)
  const [selected, setSelected] = useState({
    travelType: "Round trip",
    Adults: 1,
    Youth: 0,
    Senior: 0,
    DiscountCard: false,
  })
  return (
    <div>
      <div className="params--all">
        <ParamsContainer
          paramsType="return"
          isRoundtrip={isRoundtrip}
          setIsRoundtrip={setIsRoundtrip}
          selected={selected}
          setSelected={setSelected}
          name={selected.travelType}
        />
        <ParamsContainer
          paramsType="passengers"
          isRoundtrip={isRoundtrip}
          setIsRoundtrip={setIsRoundtrip}
          selected={selected}
          setSelected={setSelected}
          name="Adults"
        />
      </div>
      <div>
        <InputContainer />
        <div className="date--all">
          <DateContainer />
        </div>
      </div>
      <SearchButton name="Search" />
    </div>
  )
}

export default SearchbarContainer
