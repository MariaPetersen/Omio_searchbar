import "./styles.scss"

function Toggle(props: { className: string }) {
  return (
    <div>
      <label className="switch">
        <input type="checkbox" />
        <span className={props.className}></span>
      </label>
    </div>
  )
}

export default Toggle
