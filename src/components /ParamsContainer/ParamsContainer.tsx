import Params from "../Params/Params"
import { useState } from "react"
import ReturnParams from "../ReturnParams/ReturnParams"
import PassengersParams from "../PassengersParams/PassengersParams"
import "./styles.scss"

function ParamsContainer(props: { paramsType: "return" | "passengers" }) {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState("")
  console.log(isOpen)
  return (
    <div className="params--container">
      <Params
        paramsType={props.paramsType}
        selected={selected}
        setSelected={setSelected}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      {isOpen && props.paramsType === "return" && (
        <ReturnParams selected={selected} setSelected={setSelected} />
      )}
      {isOpen && props.paramsType === "passengers" && (
        <PassengersParams selected={selected} setSelected={setSelected} />
      )}
    </div>
  )
}

export default ParamsContainer
