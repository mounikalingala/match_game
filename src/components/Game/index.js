import TabItem from '../TabItem'
import ThumbnailItems from '../ThumbnailItems'

import './index.css'

const Game = props => {
  const {
    tabs,
    allImagesList,
    thumbnailImages,
    activeTabId,
    currentImageId,
    onClickTab,
    onClickThumbnail,
  } = props

  const getImage = () =>
    allImagesList.find(image => image.id === currentImageId)

  const renderTabs = () => (
    <ul className="tab-items-container">
      {tabs.map(tab => (
        <TabItem
          tabDetails={tab}
          active={tab.id === activeTabId}
          onClick={onClickTab}
          key={tab.tabId}
        />
      ))}
    </ul>
  )

  const renderThumbnails = () => (
    <ul className="thumbnails-container">
      {thumbnailImages.map(thumbnail => (
        <ThumbnailItems
          thumbnail={thumbnail}
          key={thumbnail.id}
          onClickThumbnail={onClickThumbnail}
        />
      ))}
    </ul>
  )

  const {imageUrl} = getImage()

  return (
    <div className="game-container">
      <img className="match-image" src={imageUrl} alt="match" />
      {renderTabs()}
      {renderThumbnails()}
    </div>
  )
}

export default Game
