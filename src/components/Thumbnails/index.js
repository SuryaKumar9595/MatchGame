import React from 'react'
import './index.css'

const Thumbnails = ({imagesList, onClickThumbnail}) => (
  <ul className="thumbnails-container">
    {imagesList.map(image => (
      <li key={image.id} className="thumbnail-item">
        <button
          type="button"
          className="thumbnail-button"
          onClick={() => onClickThumbnail(image.id)}
        >
          <img
            src={image.thumbnailUrl}
            alt={`${image.category} thumbnail`}
            className="thumbnail"
          />
        </button>
      </li>
    ))}
  </ul>
)

export default Thumbnails
