import './index.css'

const TabItem = props => {
  const {tabDetails, active, onClick} = props
  const onClickTabItem = () => {
    onClick(tabDetails.id)
  }

  return (
    <li className="tab-item">
      <button
        className={`tab-button ${active ? 'active' : ''}`}
        onClick={onClickTabItem}
        type="button"
      >
        {tabDetails.displayText}
      </button>
    </li>
  )
}
export default TabItem
