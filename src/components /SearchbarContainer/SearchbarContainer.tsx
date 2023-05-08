import DateContainer from "../DateContainer/DateContainer"
import InputContainer from "../InputContainer/InputContainer"
import SearchButton from "../SearchButton/SearchButton"
import ParamsContainer from "../../components /ParamsContainer/ParamsContainer"
import "./styles.scss"

function SearchbarContainer() {
  return (
    <div>
      <div className="params--all">
        <ParamsContainer paramsType="return" />
        <ParamsContainer paramsType="passengers" />
      </div>
      <div>
        <InputContainer />
        <div className="date--all">
          <DateContainer />
          <DateContainer />
        </div>
      </div>
      <SearchButton name="Search" />
    </div>
  )
}

export default SearchbarContainer
