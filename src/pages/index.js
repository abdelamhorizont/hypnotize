import * as React from "react"
import { graphql, Link } from "gatsby"

import './reset.scss'
import './global.scss'
import Logo from '../assets/logo.svg'
import ytIcon from '../assets/youtube.svg'
import instaIcon from '../assets/insta.svg'
import spotifyIcon from '../assets/spotify.svg'
import menuIcon from '../assets/menu.svg'

import Dardan from '../assets/Dardan.jpeg'
import Hava from '../assets/HAVA.jpeg'
import Biggie from '../assets/Biggie68.jpeg'
import Amex from '../assets/Amex-Dior.jpeg'

import Gold from '../assets/Gold.mp4'
import Platin from '../assets/Platin.mp4'

const IndexPage = () => {
  return (
    <>
      <div id="navigation">
        <div><img className="icon" src={ytIcon} alt="youtube Icon" /></div>
        <img id="logo" src={Logo} alt="Hypnotize Logo" />
        <div id="menu"> <img src={menuIcon} alt="Burger Menu Icon" /></div>
      </div>

      <div id="services">
        <h1>Services</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, porro veniam! Laboriosam velit quas quibusdam est non at tenetur adipisci ut quasi cum, aut doloribus dolor animi dolorem, magnam incidunt!
        </p>
      </div>

      <div id="artists">
        <h1>Artists</h1>
        <div className="artist">
          <img src={Dardan} alt="Dardan" />
        </div>
        <h2>Dardan</h2>
        <div className="icons">
          <img src={ytIcon} alt="youtube Icon" />
          <img src={spotifyIcon} alt="Spotify Icon" />
          <img src={instaIcon} alt="Instagram Icon" />
        </div>
      </div>

      <div id="erfolge">
        <h1>Erfolge</h1>

        <div className="erfolg">
          <video key={Gold} muted autoPlay loop webkit-playsinline="true" playsInline>
            <source src={Gold} type="video/mp4" />
          </video>
          <h3>Gold</h3>
          <li>Germany 5</li>
          <li>Austria 10+</li>
          <li>Switzerland 10+</li>
        </div>

        <div className="erfolg">
          <video key={Platin} muted autoPlay loop webkit-playsinline="true" playsInline>
            <source src={Platin} type="video/mp4" />
          </video>
          <h3>Platin</h3>
          <li>Germany 5</li>
          <li>Austria 10+</li>
          <li>Switzerland 10+</li>
        </div>


      </div>

      <div id="jobs">
        <h1>Jobs</h1>
        <div className="job">
          Job
        </div>
      </div>

      <div id="kontakt">
        <h1>Kontakt</h1>
        Email-adresse
      </div>

      <div id="social-media">
        <h1>Social Media</h1>
        <div className="social">
          yt
        </div>
      </div>

      <div id="impressum">
        <h4>
          <Link>Impressum</Link>
        </h4>
      </div>

      <div id="datenschutz">
        <h4>
          <Link>Datenschutz</Link>
        </h4>
      </div>
    </>
  )
}

export default IndexPage

export const Head = () => <title>Hypnotize</title>