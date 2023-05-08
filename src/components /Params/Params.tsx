import { useState } from "react"
import ReturnParams from "../ReturnParams/ReturnParams"
import PassengersParams from "../PassengersParams/PassengersParams"
import arrow from "./../../assets/icons/downdrop-arrow.png"
import { Dispatch, SetStateAction } from "react"

function Params(props: {
  paramsType: "return" | "passengers"
  selected: []
  setSelected: Dispatch<SetStateAction<[]>>
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}) {
  function handleClick() {
    props.isOpen ? props.setIsOpen(false) : props.setIsOpen(true)
  }
  return (
    <div>
      <button>
        <span>{props.selected}</span>
        <img src={arrow} alt="open" onClick={handleClick} />
      </button>
    </div>
  )
}

export default Params
