import './index.css'

const HistoryItem = props => {
  const {eachHistoryItem, deleteHistoryItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = eachHistoryItem
  const onClickDelete = () => {
    deleteHistoryItem(id)
  }
  return (
    <li className="history-item">
      <div className="history-text">
        <p className="time">{timeAccessed}</p>
        <div className="domain-info">
          <img src={logoUrl} alt="domain logo" className="domain-logo" />
          <div className="title-info">
            <p className="title">{title}</p>
            <p className="domain-url">{domainUrl}</p>
          </div>
        </div>
      </div>

      <div className="delete-container">
        <button
          type="button"
          className="button"
          data-testid="delete"
          onClick={onClickDelete}
        >
          <img
            className="delete"
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}
export default HistoryItem
