import React from "react"
import SearchbarContainer from "../../components /SearchbarContainer/SearchbarContainer"
import Toggle from "../../components /Toggle/Toggle"

function Home() {
  return (
    <div className="container">
      <SearchbarContainer />
      <div className="container--accomodation">
        <Toggle name="Find my accomodation" />
      </div>
    </div>
  )
}

export default Home
