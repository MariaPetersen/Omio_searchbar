import { AiTwotoneCalendar } from "react-icons/ai"
import "./styles.scss"

//Custom departure input for datepicker
const DepartureInput = (
  props: React.HTMLProps<HTMLInputElement>,
  ref: React.Ref<HTMLInputElement>
) => {
  return (
    <div>
      <AiTwotoneCalendar className="datepicker__input--icon" />
      <input
        {...props}
        className="datepicker__input datepicker__input--departure"
        data-testid="dateInput"
      />
    </div>
  )
}

export default DepartureInput
