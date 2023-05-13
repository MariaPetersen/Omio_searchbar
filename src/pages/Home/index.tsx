import React from "react"
import SearchbarContainer from "components /SearchbarContainer/SearchbarContainer"
import "utils/styles/styles.scss"
import AccomodationToggle from "components /GeneralComponents/AcommodationToggle/AccomodationToggle"

function Home() {
  return (
    <div className="container">
      <SearchbarContainer />
      <AccomodationToggle />
    </div>
  )
}

export default Home
