import './index.css'

const UserHistoryList = props => {
  const {historyListDetails, onDeleteHistoryItem} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = historyListDetails

  const onDeleteHistory = () => {
    onDeleteHistoryItem(id)
  }

  return (
    <li className="list-container">
      <div className="flex-container">
        <div className="sub-container">
          <p className="time">{timeAccessed}</p>
          <img src={logoUrl} className="logo" alt="domain logo" />
          <p className="title">{title}</p>
          <p className="domain">{domainUrl}</p>
        </div>
        <div className="delete-container">
          <button
            className="button"
            type="button"
            onClick={onDeleteHistory}
            data-testid="delete"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              alt="delete"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default UserHistoryList
