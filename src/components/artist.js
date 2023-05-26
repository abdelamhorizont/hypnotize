import React, { useState, useRef, useEffect } from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { motion, useInView } from "framer-motion"

import './artist.scss'

export default function Artist({ name, image, video, icons, links }) {
  const [mobile, setMobile] = useState(false)

  const [videoOpacity, setvideoOpacity] = useState(0)
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 50px -50px 0px" });
  // const isInView = useInView({
  //   margin: "0px 100px -50px 0px"
  // })

  const inViewAnim = {
    transform: isInView ? "none" : "translateY(100px)",
    opacity: isInView ? "1" : "0",
    transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
  }

  useEffect(() => {
    const isBrowser = () => typeof window !== `undefined`;
    window.addEventListener('resize', setMobile(isBrowser() && window.screen.width < 720));
  }, [])

  useEffect(() => {

    isInView ? setTimeout(function () {
      setvideoOpacity(1)
    }, 2000)
      :
      !isInView ?
        setvideoOpacity(0)
        :
        setvideoOpacity(0)

    // mobile && (isInView ? setvideoOpacity(1) : setvideoOpacity(0))

  }, [isInView])


  // const image = getImage(image)

  return (
    <div ref={ref} className="artist" style={inViewAnim}
      onMouseEnter={() => setvideoOpacity(1)}
      onMouseLeave={() => setvideoOpacity(0)}
    >
      <div className="artist-image-wrapper">
        <div className="artist-image">
          {video &&
            <video key={video.url} muted autoPlay loop webkit-playsinline="true" playsInline
              style={{ opacity: videoOpacity }}
            >
              <source src={video.url} type="video/mp4" />
            </video>
          }
          {/* <img src={image} alt="Dardan" /> */}
          <GatsbyImage image={image.gatsbyImageData} alt={name} />
        </div>
      </div>

      <div className="artist-info">
        <h2>{name}</h2>
        <div className="icons">
          {
            icons?.map((icon, index) => {
              return (
                <a href={links[index]} target="_blank">
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
