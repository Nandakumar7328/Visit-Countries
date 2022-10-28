import './index.css'

const CountriesList = props => {
  const {countriesDetails, onClickVisitButton} = props
  const {name, isVisited, id} = countriesDetails
  const onClickButton = () => {
    onClickVisitButton(id)
  }
  const isButtonOrPara = isVisited ? (
    <p className="visited-para">Visited</p>
  ) : (
    <button onClick={onClickButton} type="button" className="btn-visit">
      Visit
    </button>
  )

  return (
    <>
      <li className="li-container">
        <p className="name">{name}</p>
        {isButtonOrPara}
      </li>
      <hr className="line" />
    </>
  )
}

export default CountriesList
