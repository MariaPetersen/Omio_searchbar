import DateContainer from "../DateContainer/DateContainer"
import InputContainer from "../InputContainer/InputContainer"
import ParamsContainer from "../ParamsContainer/ParamsContainer"
import SearchButton from "../SearchButton/SearchButton"

function SearchbarContainer() {
  return (
    <div>
      <div>
        <ParamsContainer paramsType="return" />
        <ParamsContainer paramsType="passengers" />
      </div>

      <InputContainer />
      <DateContainer />
      <SearchButton name="Search" />
    </div>
  )
}

export default SearchbarContainer
