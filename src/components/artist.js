import React, { useState, useRef } from 'react'
import { motion, useInView } from "framer-motion"

import './artist.scss'

export default function Artist({ name, image, video, icons }) {
  const [videoOpacity, setvideoOpacity] = useState(0)
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const inViewAnim = {
    transform: isInView ? "none" : "translateY(100px)",
    opacity: isInView ? "1" : "0",
    transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
  }

  return (
    <div ref={ref} className="artist" style={inViewAnim}
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
                <a href="https://www.youtube.com/@HypnotizeEntertainment" target="_blank">
                  <img src={icon} alt="youtube" />
                </a>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
