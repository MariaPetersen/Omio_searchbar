import React from "react"
import SearchbarContainer from "../../components /SearchbarContainer/SearchbarContainer"
import Toggle from "../../components /ToggleContainer/ToggleContainer"
import "./../../utils/styles/styles.scss"

function Home() {
  return (
    <div className="container">
      <SearchbarContainer />
      <div className="container--accomodation">
        <Toggle className="toggle--blue" />
        <div className="accomodation">Enable batmobile transport mode</div>
      </div>
    </div>
  )
}

export default Home
