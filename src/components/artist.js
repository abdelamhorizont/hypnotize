import React, { useState } from 'react'

import './artist.scss'

export default function Artist({ name, image, video, icons }) {
  const [videoOpacity, setvideoOpacity] = useState(0)

  return (
    <div className="artist" 
    onMouseEnter={() => setvideoOpacity(1)}
    onMouseLeave={() => setvideoOpacity(0)}
    >
      <div className="artist-image-wrapper">
        <div className="artist-image">
          {video &&
            <video key={video} muted autoPlay loop webkit-playsinline="true" playsInline
              style={{ opacity: videoOpacity }}
            >
              <source src={video} type="video/mp4" />
            </video>
          }
          <img src={image} alt="Dardan" />
        </div>
      </div>

      <div className="artist-info">
        <h2>{name}</h2>
        <div className="icons">
          {
            icons?.map(icon => {
              return (
                <img src={icon} alt="youtube" />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
