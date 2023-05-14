import arrow from "assets/icons/downdrop-arrow.png"
import { Dispatch, SetStateAction } from "react"
import "./styles.scss"

function Params(props: {
  paramsType: "return" | "passengers"
  name: string | []
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
  passengers: string
  isRoundtrip?: boolean | undefined
  setIsRoundtrip?: Dispatch<SetStateAction<boolean>>
}) {
  function handleClick() {
    props.isOpen ? props.setIsOpen(false) : props.setIsOpen(true)
  }
  return (
    <div className="params">
      <button onClick={handleClick} className="params--button">
        <span className="params--name">{props.name}</span>
        {props.isOpen ? (
          <img src={arrow} alt="open" className="params--icon rotated" />
        ) : (
          <img src={arrow} alt="open" className="params--icon" />
        )}
      </button>
    </div>
  )
}

export default Params
