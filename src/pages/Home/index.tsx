import React from "react"
import SearchbarContainer from "../../components /SearchbarContainer/SearchbarContainer"
import Toggle from "../../components /Toggle/Toggle"
import "./../../utils/styles/styles.scss"

function Home() {
  return (
    <div className="container">
      <SearchbarContainer />
      <div className="container--accomodation">
        <Toggle className="slider slider--blue round" />
        <div>Enable batmobile transport mode</div>
      </div>
    </div>
  )
}

export default Home
