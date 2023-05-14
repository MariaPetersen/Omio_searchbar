import ToggleContainer from "components /GeneralComponents/ToggleContainer/ToggleContainer"
import "./styles.scss"
import { Dispatch, ChangeEvent, SetStateAction } from "react"

function AccomodationToggle(props: {
  includeAccomodation: boolean
  setIncludeAccomodation: Dispatch<SetStateAction<boolean>>
  text: string
}) {
  function onAccomodationClick(e: ChangeEvent<HTMLElement>) {
    e.preventDefault()
    props.setIncludeAccomodation(!props.includeAccomodation)
  }
  return (
    <div className="container--accomodation">
      <ToggleContainer
        className="toggle--blue"
        onChange={onAccomodationClick}
        isChecked={props.includeAccomodation}
      />
      <div className="accomodation">{props.text}</div>
    </div>
  )
}

export default AccomodationToggle
