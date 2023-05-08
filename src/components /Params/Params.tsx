import { useState } from "react"
import ReturnParams from "../ReturnParams/ReturnParams"
import PassengersParams from "../PassengersParams/PassengersParams"
import arrow from "./../../assets/icons/downdrop-arrow.png"
import { Dispatch, SetStateAction } from "react"
import "./styles.scss"

function Params(props: {
  paramsType: "return" | "passengers"
  selected: string
  setSelected: Dispatch<SetStateAction<string>>
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}) {
  function handleClick() {
    props.isOpen ? props.setIsOpen(false) : props.setIsOpen(true)
  }
  return props.isOpen ? (
    <div className="params">
      <button>
        <span className="params--name">{props.selected}</span>
        <img
          src={arrow}
          alt="open"
          onClick={handleClick}
          className="params--icon rotated"
        />
      </button>
    </div>
  ) : (
    <div className="params">
      <button>
        <span className="params--name">{props.selected}</span>
        <img src={arrow} alt="open" onClick={handleClick} className="params--icon" />
      </button>
    </div>
  )
}

export default Params
