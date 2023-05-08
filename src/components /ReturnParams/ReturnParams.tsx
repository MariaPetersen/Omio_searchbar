import { Dispatch, SetStateAction } from "react"
import ParamsOption from "../ParamsOption/ParamsOption"
import { MouseEvent } from "react"

function ReturnParams(props: {
  selected: string
  setSelected: Dispatch<SetStateAction<string>>
}) {
  function handleClick(e: MouseEvent<HTMLElement>) {
    const selectedOption = e.currentTarget.id
    console.log(selectedOption)
    props.setSelected(selectedOption)
  }
  return (
    <div>
      <ParamsOption name="One-way" onClick={handleClick} selected={props.selected} />
      <ParamsOption
        name="Round trip"
        onClick={handleClick}
        selected={props.selected}
      />
    </div>
  )
}

export default ReturnParams
