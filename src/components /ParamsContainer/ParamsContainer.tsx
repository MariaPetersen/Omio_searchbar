import Params from "../Params/Params"
import { useState } from "react"
import ReturnParams from "../ReturnParams/ReturnParams"
import PassengersParams from "../PassengersParams/PassengersParams"

function ParamsContainer(props: { paramsType: "return" | "passengers" }) {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState<[]>([])
  return (
    <div>
      <Params
        paramsType={props.paramsType}
        selected={selected}
        setSelected={setSelected}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      {isOpen && (
        <div>
          {
            (props.paramsType === "return" && (
              <ReturnParams selected={selected} setSelected={setSelected} />
            ),
            props.paramsType === "passengers" && (
              <PassengersParams selected={selected} setSelected={setSelected} />
            ))
          }
        </div>
      )}
    </div>
  )
}

export default ParamsContainer
