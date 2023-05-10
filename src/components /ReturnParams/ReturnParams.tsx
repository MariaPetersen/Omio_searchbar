import { Dispatch, SetStateAction } from "react"
import ParamsOption from "../ParamsOption/ParamsOption"
import { MouseEvent } from "react"

function ReturnParams(props: {
  selected: {
    travelType: string
    Adults: number
    Youth: number
    Senior: number
    DiscountCard: boolean
  }
  setSelected: Dispatch<
    SetStateAction<{
      travelType: string
      Adults: number
      Youth: number
      Senior: number
      DiscountCard: boolean
    }>
  >
  isRoundtrip?: boolean | undefined
  setIsRoundtrip: Dispatch<SetStateAction<boolean>>
}) {
  function handleClick(e: MouseEvent<HTMLElement>) {
    const selectedOption = { travelType: e.currentTarget.id }
    console.log(selectedOption)
    props.setSelected((selected) => ({ ...selected, ...selectedOption }))
    props.selected.travelType === "Round trip" && props.setIsRoundtrip(true)
    console.log(props.selected)
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
