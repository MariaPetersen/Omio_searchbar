import "./styles.scss"

function SearchButton(props: { name: string }) {
  return <button className="searchButton">{props.name}</button>
}

export default SearchButton
