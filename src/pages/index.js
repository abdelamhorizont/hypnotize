import React, { useState, useRef, useEffect } from "react"
import { graphql, Link } from "gatsby"

import Artist from "../components/artist"
import Job from "../components/job"

import './reset.scss'
import './global.scss'

import Logo from '../assets/logo2.svg'
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

import { motion, useInView } from "framer-motion"

const IndexPage = () => {
  const icons = [ytIcon, spotifyIcon, instaIcon]

  const [menuOpen, setmenuOpen] = useState(false)
  const [imprintOpen, setimprintOpen] = useState(false)

  const collapse = menuOpen ? 'collapse' : 'not-collapsed'
  const nomargin = { margin: menuOpen && 0.5 + 'rem' }

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const collapseVariants = {
    open: { maxHeight: "100vh" },
    close: { maxHeight: "0vh" }
  }

  const inViewVariants = {
    anim: { translateY: "100px" },
    none: { translateY: "none" }
  }

  const inViewAnim = {
    transform: isInView ? "none" : "translateY(50px)",
    opacity: isInView ? "1" : "0",
    transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
  }

  return (
    <div ref={ref} className="menu-active">
      <div id="navigation">
        <div> <a href="https://www.youtube.com/@HypnotizeEntertainment" target="_blank">
          <img className="icon" id="yt-icon" src={ytIcon} alt="youtube Icon" />
        </a> </div>

        <motion.div
          initial={{ scale: 5, y: "40vh" }}
          animate={{ scale: 1, y: "0vh" }}
          transition={{ease: "easeInOut", duration: 0.5, delay: 2 }}
        ><Link to='/'> <img id="logo" src={Logo} alt="Hypnotize Logo" /></Link></motion.div>

        <div className="menu-buttons">
          <li id="menu" key="openButton" className="menuButton" style={{ display: !menuOpen ? "inline" : "none" }} onClick={() => setmenuOpen(true)}>
            <img className="icon" src={menuIcon} alt="Burger Menu Icon" /></li>
          <li id="menu" key="closeButton" className="menuButton" style={{ display: menuOpen ? "inline" : "none" }} onClick={() => setmenuOpen(false)}>
            <img className="icon" src={closeMenuIcon} alt="Burger Menu Icon" /></li>
        </div>
      </div>

      <motion.div style={{ margin: menuOpen && 14 + 'rem 0.5rem 0.5rem 0.5rem' }} id="services"
        initial={{ opacity: "0" }}
        animate={{ opacity: "1" }}
        transition={{ duration: 0.5, delay: 2 }}
      >
        <a onClick={() => setmenuOpen(false)} href="#services"><h1 style={{ marginBottom: menuOpen && 0.5 + 'rem' }}>Services</h1></a>
        <p className={collapse}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, porro veniam! Laboriosam velit quas quibusdam est non at tenetur adipisci ut quasi cum, aut doloribus dolor animi dolorem, magnam incidunt!
        </p>
      </motion.div>

      {/* <div className="background-video">
        <video key={DardanVideo} muted autoPlay loop webkit-playsinline="true" playsInline>
          <source src={DardanVideo} type="video/mp4" />
        </video>
      </div> */}

      <motion.div id="artists"
        initial={{ opacity: "0" }}
        animate={{ opacity: "1" }}
        transition={{ duration: 0.5, delay: 2 }}
      >
        <a onClick={() => setmenuOpen(false)} href="#artists"><h1 style={nomargin}>Artists</h1></a>
        <div className={collapse}>
          <Artist name="Dardan" image={Dardan} video={DardanVideo} icons={icons} />
          <Artist name="Hava" image={Hava} video={DardanVideo} icons={icons} />
          <Artist name="Biggie68" image={Biggie} video={DardanVideo} icons={icons} />
          <Artist name="Amex-Dior" image={Amex} video={DardanVideo} icons={icons} />
        </div>
      </motion.div>


      <div id="erfolge">
        <a onClick={() => setmenuOpen(false)} href="#erfolge"><h1 style={nomargin}>Erfolge</h1></a>
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
        <a onClick={() => setmenuOpen(false)} href="#jobs"><h1 style={nomargin}>Jobs</h1></a>
        <div className={collapse}>
          <Job />
          <Job />
          <Job />
        </div>
      </div>

      <div id="kontakt">
        <a onClick={() => setmenuOpen(false)} href="#kontakt"><h1 style={nomargin}>Kontakt</h1></a>
        <div className={collapse}>
          <div id="mail"> <a href="mailto:info@hypnotize-entertainment.de">info@hypnotize-entertainment.de</a> </div>
        </div>
      </div>

      <div id="social-media">
        <a onClick={() => setmenuOpen(false)} href="#social-media"><h1 style={nomargin}>Social Media</h1></a>
        <div className={collapse}>
          <div className="icons">
            <img src={ytIcon} alt="youtube Icon" />
            <img src={spotifyIcon} alt="Spotify Icon" />
            <img src={instaIcon} alt="Instagram Icon" />
          </div>
          <img id="logo" src={Logo} alt="Hypnotize Logo" />
        </div>
      </div>

      <div className="meta-menu">
        <div id="impressum">
          <a onClick={() => {
            setmenuOpen(false)
            setimprintOpen(!imprintOpen)
            if (menuOpen === true) {
              setimprintOpen(true)
            }
          }}
            href="#impressum">
            <h4>Impressum</h4></a>
          {/* <div className={textCollapse}> */}
          <motion.div
            style={{ overflow: 'hidden' }}
            initial={{ maxHeight: 0 }}
            variants={collapseVariants}
            animate={menuOpen ? 'close' : imprintOpen ? 'open' : 'close'}
            transition={{ duration: 0.5 }}
          >
            <div className='imprint'>
              <p>
                Et fugiat tempor eu pariatur non incididunt velit adipisicing sit fugiat eu. Aute pariatur ea tempor adipisicing. Cillum sit culpa id irure irure ad ullamco. Ad nulla occaecat voluptate labore in qui. Sint aliquip dolor in deserunt qui commodo nulla consequat veniam ad non id eiusmod. Ex tempor aute dolore nisi duis eu minim do sunt officia fugiat fugiat deserunt in.

                Ea consectetur aliqua deserunt id Lorem. Reprehenderit do voluptate veniam nostrud ex deserunt culpa consectetur proident. Commodo officia consequat occaecat ullamco dolore nisi in voluptate ipsum magna sunt et.

                Ut adipisicing elit incididunt qui non commodo nostrud. Dolor consectetur ullamco sint sint ad consequat sit ea deserunt nisi. Ad irure id laborum eu duis ea id aute occaecat mollit proident consequat ut. Ullamco culpa fugiat consequat velit proident. In Lorem eu consectetur aliquip cillum culpa proident. Excepteur excepteur cupidatat ea minim ullamco minim dolor sunt Lorem elit.

                Ullamco amet magna sint anim. Excepteur proident do aliquip sint nulla aliquip velit fugiat commodo ut. Ea ad dolor consectetur deserunt reprehenderit anim culpa qui est fugiat. Aliquip do commodo consequat sunt nostrud non fugiat sint velit nisi duis dolore. In Lorem nulla pariatur tempor duis esse quis in. Reprehenderit fugiat mollit minim laborum cupidatat. Reprehenderit id do voluptate cillum consequat pariatur do id veniam eiusmod duis cupidatat reprehenderit.

                Ut et Lorem ut ut id minim cillum officia pariatur occaecat id reprehenderit cupidatat proident. Quis officia ea sint ea laboris laboris esse ad do ad. Dolor cupidatat voluptate minim minim nisi culpa id in eiusmod cupidatat ex sint dolore sunt. Excepteur deserunt deserunt reprehenderit velit ipsum laboris eiusmod non aute.

                Adipisicing veniam sint fugiat voluptate. Esse ipsum laborum aliqua adipisicing sint sit incididunt ullamco. Est esse non voluptate non tempor ut esse exercitation eiusmod aute eiusmod. Eiusmod pariatur sint minim irure esse ut exercitation non. Velit sit do consectetur ex consequat. Dolore nisi velit ad non anim veniam ut elit occaecat sit exercitation culpa.

                Sunt pariatur cillum cupidatat ipsum tempor dolore et adipisicing in. Consectetur consequat velit pariatur sit proident eu adipisicing consectetur ad veniam nulla laboris consequat Lorem. Eiusmod mollit amet amet anim proident voluptate aliquip cupidatat anim. Anim incididunt culpa id est nostrud in aliquip aliqua ea laborum commodo nulla aliquip. Id velit commodo pariatur est quis adipisicing ullamco. Sit eu enim eu dolore. Ex aute esse ea proident sint.

                Magna nostrud consectetur consequat nulla consequat ex. Aliqua laborum exercitation reprehenderit nisi ea. Enim aliqua dolor in sit duis veniam duis cupidatat esse exercitation irure. Culpa ex est in proident in id qui do officia est veniam eiusmod anim. Cillum aliquip sit consequat aliquip cupidatat ullamco occaecat labore.

                Qui et exercitation quis nulla dolor ex esse veniam labore quis adipisicing quis. Aute fugiat ut consequat incididunt pariatur aute commodo culpa minim nisi id. Ipsum nisi nisi sint duis. Tempor est ad ea mollit et nostrud amet ex laborum tempor occaecat dolore nisi et. Labore cillum in consequat sint anim pariatur esse ut eu.

                Lorem in consequat labore excepteur incididunt elit officia dolor sunt laboris magna. Proident non non labore in do enim nisi. Esse pariatur deserunt nisi id cupidatat cupidatat adipisicing. Amet laborum ad excepteur velit aliquip anim nulla adipisicing duis elit aliqua ad Lorem. Sunt incididunt ut tempor occaecat. Ea minim Lorem quis ut aliqua ad aliqua culpa esse commodo in est. Minim ea occaecat ullamco ut nostrud nulla incididunt.
              </p>
            </div>
          </motion.div>
          {/* </div> */}
        </div>

        <div id="datenschutz">
          <h4>
            <Link to="/privacy-policy">Datenschutz</Link>
          </h4>
        </div>
      </div>
    </div>
  )
}

export default IndexPage

export const Head = () => <title>Hypnotize</title>
