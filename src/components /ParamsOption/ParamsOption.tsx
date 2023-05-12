import { MouseEventHandler } from "react"
import "./styles.scss"
import { AiOutlineCheck } from "react-icons/ai"

function ParamsOption(props: {
  name: string
  onClick: MouseEventHandler<HTMLDivElement>
  selected: string
}) {
  console.log(props.selected)
  return props.selected === props.name ? (
    <div id={props.name} onClick={props.onClick} className="option selected">
      <div className="check check--selected">
        <AiOutlineCheck />
      </div>
      <span className="selected">{props.name}</span>
    </div>
  ) : (
    <div id={props.name} onClick={props.onClick} className="option">
      <div className="check">
        <AiOutlineCheck />
      </div>
      <span>{props.name}</span>
    </div>
  )
}

export default ParamsOption
