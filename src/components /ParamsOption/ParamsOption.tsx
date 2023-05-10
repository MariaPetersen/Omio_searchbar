import { MouseEventHandler } from "react"
import check from "./../../assets/icons/check.png"
import "./styles.scss"

function ParamsOption(props: {
  name: string
  onClick: MouseEventHandler<HTMLDivElement>
  selected: {
    travelType: string
    Adults: number
    Youth: number
    Senior: number
    DiscountCard: boolean
  }
}) {
  console.log(props.selected)
  console.log(props.name)
  return props.selected.travelType === props.name ? (
    <div id={props.name} onClick={props.onClick} className="option selected">
      <img src={check} alt="selected" className="check check--selected" />
      <span>{props.name}</span>
    </div>
  ) : (
    <div id={props.name} onClick={props.onClick} className="option">
      <img src={check} alt="not selected" className="check" />
      <span>{props.name}</span>
    </div>
  )
}

export default ParamsOption
