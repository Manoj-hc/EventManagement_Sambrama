import React from 'react'
import homeStyles from '../../../styles/Home.module.css'

const GridView = ({ images }) => {
  return (
    <div className={homeStyles.imageSection}>
      {images && images.map((item, index) => {
        return (
          <div
            key={index}
            className={homeStyles.imageCover}
            style={{
              backgroundImage: `url(${item})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat'
            }}
          />
        )
      })}
    </div>
  )
}

export default GridView