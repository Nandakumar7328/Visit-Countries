import './index.css'

const VisitedCountries = props => {
  const {visitedDetails, onClickRemoveButton} = props
  const {imageUrl, name, id} = visitedDetails
  const onClickRemove = () => {
    onClickRemoveButton(id)
  }

  return (
    <li className="li-container-visited">
      <img src={imageUrl} alt=" thumbnail" className="flag-image" />
      <div className="name-button-visited">
        <p className="name-visited">{name}</p>
        <button onClick={onClickRemove} className="btn-remove" type="button">
          Remove
        </button>
      </div>
    </li>
  )
}

export default VisitedCountries
