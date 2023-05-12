import { MouseEventHandler, forwardRef } from "react"
import { Dispatch, SetStateAction } from "react"
import { AiTwotoneCalendar } from "react-icons/ai"
import "./styles.scss"

const DestinationInput = (
  props: React.HTMLProps<HTMLInputElement>,
  ref: React.Ref<HTMLInputElement>
) => {
  return (
    <div>
      <AiTwotoneCalendar className="datepicker__input--icon" />
      <input {...props} className="datepicker__input datepicker__input--departure" />
    </div>
  )
}

export default DestinationInput
