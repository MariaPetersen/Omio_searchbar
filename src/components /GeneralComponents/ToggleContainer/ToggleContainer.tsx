import { Dispatch, ChangeEventHandler, SetStateAction } from "react"
import "./styles.scss"
import Toggle from "react-toggle"

function ToggleContainer(props: {
  className: string
  onChange: ChangeEventHandler<HTMLInputElement>
  isChecked: boolean
}) {
  return (
    <div>
      <label className="switch">
        <Toggle
          icons={false}
          className={props.className}
          onChange={props.onChange}
          checked={props.isChecked}
        />
      </label>
    </div>
  )
}

export default ToggleContainer
