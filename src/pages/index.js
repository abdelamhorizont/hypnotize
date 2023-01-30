import React, { useState } from "react"
import { graphql, Link } from "gatsby"

import Artist from "../components/artist"

import './reset.scss'
import './global.scss'

import Logo from '../assets/logo.svg'
import ytIcon from '../assets/youtube.svg'
import instaIcon from '../assets/insta.svg'
import spotifyIcon from '../assets/spotify.svg'
import menuIcon from '../assets/menu.svg'
import closeMenuIcon from '../assets/close-menu.svg'

import Dardan from '../assets/Dardan.jpg'
import Hava from '../assets/HAVA.jpg'
import Biggie from '../assets/Biggie68.jpg'
import Amex from '../assets/Amex-Dior.jpg'

import DardanVideo from '../assets/dardan-video.mp4'
import Gold from '../assets/Gold.mp4'
import Platin from '../assets/Platin.mp4'

const IndexPage = () => {
  const icons = [ytIcon, spotifyIcon, instaIcon]
  const [menuOpen, setmenuOpen] = useState(false)

  const collapse = menuOpen ? 'collapse' : 'not-collapsed'
  const nomargin = {
    margin: menuOpen && 1 + 'rem'
  }
  return (
    <div className="menu-active">
      <div id="navigation">
        <div><img className="icon" src={ytIcon} alt="youtube Icon" /></div>
        <div><img id="logo" src={Logo} alt="Hypnotize Logo" /></div>

        {/* <div id="menu"> <img src={menuIcon} alt="Burger Menu Icon" /></div> */}
        <div className="menu-buttons">
          {/* <LanguageSelector language={language} handleLang={handleLang} /> */}
          <li id="menu" key="openButton" className="menuButton" style={{ display: !menuOpen ? "inline" : "none" }} onClick={() => setmenuOpen(true)}>
          <img src={menuIcon} alt="Burger Menu Icon" /></li>
          <li id="menu" key="closeButton" className="menuButton" style={{ display: menuOpen ? "inline" : "none" }} onClick={() => setmenuOpen(false)}>
          <img src={closeMenuIcon} alt="Burger Menu Icon" /></li>
        </div>
      </div>

      <div style={nomargin} id="services">
        <h1 style={{marginBottom: menuOpen && 1 + 'rem'}}>Services</h1>
        <p className={collapse}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, porro veniam! Laboriosam velit quas quibusdam est non at tenetur adipisci ut quasi cum, aut doloribus dolor animi dolorem, magnam incidunt!
        </p>
      </div>

      {/* <div className="background-video">
        <video key={DardanVideo} muted autoPlay loop webkit-playsinline="true" playsInline>
          <source src={DardanVideo} type="video/mp4" />
        </video>
      </div> */}

      <div id="artists">
        <h1 style={nomargin}>Artists</h1>
        <div className={collapse}>
        <Artist name="Dardan" image={Dardan} video={DardanVideo} icons={icons} />
        <Artist name="Hava" image={Hava} video={DardanVideo} icons={icons} />
        <Artist name="Biggie68" image={Biggie} video={DardanVideo} icons={icons} />
        <Artist name="Amex-Dior" image={Amex} video={DardanVideo} icons={icons} />
        </div>
      </div>


      <div id="erfolge">
        <h1 style={nomargin}>Erfolge</h1>
        <div className={collapse}>
        <div className="grid">
          <div className="erfolg">
            <video key={Gold} muted autoPlay loop webkit-playsinline="true" playsInline>
              <source src={Gold} type="video/mp4" />
            </video>
            <h3>Gold</h3>
            <li>Germany <span>5</span> </li>
            <li>Austria <span>10+</span>  </li>
            <li>Switzerland <span>10+</span> </li>
          </div>

          <div className="erfolg">
            <video key={Platin} muted autoPlay loop webkit-playsinline="true" playsInline>
              <source src={Platin} type="video/mp4" />
            </video>
            <h3>Platin</h3>
            <li>Germany <span>5</span> </li>
            <li>Austria <span>10+</span> </li>
            <li>Switzerland <span>10+</span> </li>
          </div>
        </div>
        </div>
      </div>

      <div id="jobs">
        <h1 style={nomargin}>Jobs</h1>
        <div className={collapse}>
        <div className="job">
          Assistant Artist Management (m/w/d)
        </div>
        </div>
      </div>

      <div id="kontakt">
        <h1 style={nomargin}>Kontakt</h1>
        <div className={collapse}>
        <div id="mail"> info@hypnotize-entertainment.de </div>
        </div>
      </div>

      <div id="social-media">
        <h1 style={nomargin}>Social Media</h1>
        <div className={collapse}>
        <img id="logo" src={Logo} alt="Hypnotize Logo" />
        <div className="icons">
          <img src={ytIcon} alt="youtube Icon" />
          <img src={spotifyIcon} alt="Spotify Icon" />
          <img src={instaIcon} alt="Instagram Icon" />
        </div>
        </div>
      </div>

      <div className="meta-menu">
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
      </div>
    </div>
  )
}

export default IndexPage

export const Head = () => <title>Hypnotize</title>
