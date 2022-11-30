const ThumbnailItems = props => {
  const {thumbnail, onClickThumbnail} = props
  const {id, thumbnailUrl} = thumbnail

  const onClickThumbnailItem = () => {
    onClickThumbnail(id)
  }

  return (
    <li className="thumbnail-item">
      <button
        type="button"
        className="thumbnail-image"
        onClick={onClickThumbnailItem}
      >
        <img src={thumbnailUrl} alt="thumbnail" />
      </button>
    </li>
  )
}

export default ThumbnailItems
