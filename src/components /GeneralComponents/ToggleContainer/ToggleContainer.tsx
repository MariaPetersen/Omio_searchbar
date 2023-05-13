import "./styles.scss"
import Toggle from "react-toggle"

function ToggleContainer(props: { className: string }) {
  return (
    <div>
      <label className="switch">
        <Toggle icons={false} className={props.className} />
      </label>
    </div>
  )
}

export default ToggleContainer
