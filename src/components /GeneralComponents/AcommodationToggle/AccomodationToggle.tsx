import Toggle from "components /GeneralComponents/ToggleContainer/ToggleContainer"
import "./styles.scss"

function AccomodationToggle() {
  return (
    <div className="container--accomodation">
      <Toggle className="toggle--blue" />
      <div className="accomodation">Enable batmobile transport mode</div>
    </div>
  )
}

export default AccomodationToggle
