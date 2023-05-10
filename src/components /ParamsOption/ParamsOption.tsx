import { MouseEventHandler } from "react"
import "./styles.scss"
import { FaCheck } from "react-icons/fa"

function ParamsOption(props: {
  name: string
  onClick: MouseEventHandler<HTMLDivElement>
  selected: string
}) {
  console.log(props.selected)
  return props.selected === props.name ? (
    <div id={props.name} onClick={props.onClick} className="option selected">
      <div className="check check--selected">
        <FaCheck />
      </div>
      <span>{props.name}</span>
    </div>
  ) : (
    <div id={props.name} onClick={props.onClick} className="option">
      <div className="check">
        <FaCheck />
      </div>
      <span>{props.name}</span>
    </div>
  )
}

export default ParamsOption
