import React from 'react'
import homeStyles from '../../../styles/Home1.module.css'

const GridView1 = ({ images }) => {
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

export default GridView1