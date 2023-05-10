import { Dispatch, SetStateAction } from "react"
import ParamsOption from "../ParamsOption/ParamsOption"
import { MouseEvent } from "react"
import { useState } from "react"
import "./styles.scss"

function ReturnParams(props: {
  isRoundtrip: boolean
  setIsRoundtrip: Dispatch<SetStateAction<boolean>>
  selected: string
  setSelected: Dispatch<SetStateAction<string>>
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}) {
  function handleClick(e: MouseEvent<HTMLElement>) {
    props.setSelected(e.currentTarget.id)
    props.selected === "Round trip" && props.setIsRoundtrip(false)
    props.selected === "One-way" && props.setIsRoundtrip(true)
    props.setIsOpen(false)
  }
  return (
    <div className="returnParams">
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
