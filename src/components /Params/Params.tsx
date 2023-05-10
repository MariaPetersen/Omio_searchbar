import arrow from "./../../assets/icons/downdrop-arrow.png"
import { Dispatch, SetStateAction } from "react"
import "./styles.scss"

function Params(props: {
  paramsType: "return" | "passengers"
  name: string | []
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
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
  passengers: string
  isRoundtrip?: boolean | undefined
  setIsRoundtrip?: Dispatch<SetStateAction<boolean>>
}) {
  function handleClick() {
    props.isOpen ? props.setIsOpen(false) : props.setIsOpen(true)
  }
  return props.isOpen ? (
    <div className="params">
      <button onClick={handleClick}>
        <span className="params--name">{props.name}</span>
        <img src={arrow} alt="open" className="params--icon rotated" />
      </button>
    </div>
  ) : (
    <div className="params">
      <button onClick={handleClick}>
        <span className="params--name">{props.name}</span>
        <img src={arrow} alt="open" className="params--icon" />
      </button>
    </div>
  )
}

export default Params
