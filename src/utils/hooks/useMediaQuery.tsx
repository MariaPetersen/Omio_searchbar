import { useState, useEffect } from "react"

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(query)
    if (window.matchMedia(query).matches !== matches) {
      setMatches(window.matchMedia(query).matches)
    }
    const listener = () => setMatches(window.matchMedia(query).matches)
    window.addEventListener("resize", listener)
    return () => window.removeEventListener("resize", listener)
  }, [matches, query])

  return matches
}

export default useMediaQuery
