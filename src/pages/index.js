import React, { useState, useRef, useEffect } from "react"
import { graphql, Link } from "gatsby"
import { StructuredText } from 'react-datocms';

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

import { motion, useInView } from "framer-motion"

const IndexPage = ({ data }) => {
  const [lang, setLang] = useState('de')

  const [mobile, setMobile] = useState(false)
  const [logoAnimSize, setlogoAnimSize] = useState(2)
  const icons = [ytIcon, spotifyIcon, instaIcon]

  const [menuOpen, setmenuOpen] = useState(false)
  const [imprintOpen, setimprintOpen] = useState(false)
  const [privacyOpen, setprivacyOpen] = useState(false)

  const collapse = menuOpen ? 'collapse' : 'not-collapsed'
  const nomargin = { margin: menuOpen && 0.5 + 'rem' }

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    const isBrowser = () => typeof window !== `undefined`;
    window.addEventListener('resize', setMobile(isBrowser() && window.screen.width < 720));
  }, [])


  useEffect(() => {
    mobile ? setlogoAnimSize(2) : setlogoAnimSize(5)
  }, [mobile])


  const collapseVariants = {
    open: { maxHeight: "300vh" },
    close: { maxHeight: "0vh" }
  }

  const bgVideoStyle = {
    mixBlendMode: "color-dodge",
    filter: "blur(60px)",
    opacity: "0.8",
  }

  const content = data.datoCmsHomepage
  const service = data.datoCmsHomepage._allServicesLocales.filter(node => node.locale == lang)[0].value
  const impressum = data.datoCmsHomepage._allImpressumLocales.filter(node => node.locale == lang)[0].value
  const datenschutz = data.datoCmsHomepage._allDatenschutzLocales.filter(node => node.locale == lang)[0].value
  const jobs = data.datoCmsHomepage._allJobsLocales.filter(node => node.locale == lang)[0].value
  const artists = data.allDatoCmsArtist
  const erfolge = data.allDatoCmsErfolg
  const kontakt = data.allDatoCmsKontakt.nodes[0]
  const bgVideo = data.allDatoCmsBackgroundVideo.nodes[0]

  return (
    <div ref={ref} className="menu-active">
      <div id="navigation">
        <div> <a href="https://www.youtube.com/@HypnotizeEntertainment" target="_blank">
          <img className="icon" id="yt-icon" src={ytIcon} alt="youtube Icon" />
        </a> </div>

        <motion.div
          initial={{ scale: logoAnimSize, y: "40vh" }}
          animate={{ scale: 1, y: "0vh" }}
          transition={{ ease: "easeInOut", duration: 0.5, delay: 1 }}
        ><Link to='/'> <img id="logo" src={Logo} alt="Hypnotize Logo" /></Link></motion.div>

        <div className="menu-button-lang">

          {/* {!mobile &&
            <div className="lang">
              <li className="active">de</li>
              <li>en</li>
            </div>
          } */}
          <div className="menu-buttons">
            <li id="menu" key="openButton" className="menuButton" style={{ display: !menuOpen ? "inline" : "none" }} onClick={() => setmenuOpen(true)}>
              <img className="icon" src={menuIcon} alt="Burger Menu Icon" /></li>
            <li id="menu" key="closeButton" className="menuButton" style={{ display: menuOpen ? "inline" : "none" }} onClick={() => setmenuOpen(false)}>
              <img className="icon" src={closeMenuIcon} alt="Burger Menu Icon" /></li>
          </div>
        </div>
      </div>


      {menuOpen &&
        <div className="mobile-lang">
          <div className="lang">
            <button className={lang === 'de' && "active"} onClick={() => setLang('de')}>de</button>
            <button className={lang === 'en' && "active"} onClick={() => setLang('en')}>en</button>
          </div>
        </div>
      }

      <motion.div style={{ margin: menuOpen && (mobile ? '5' : "14") + 'rem 0.5rem 0.5rem 0.5rem' }} id="services"
        initial={{ opacity: "0" }}
        animate={{ opacity: "1" }}
        transition={{ duration: 0.5, delay: 1.1 }}
      >
        <a onClick={() => setmenuOpen(false)} href="#services"><h1 style={{ marginBottom: menuOpen && 0 + 'rem' }}>Services</h1></a>
        <p className={collapse}>
          <StructuredText data={service} />
        </p>
      </motion.div>

      {
        bgVideo &&
        <div className={`background-video ${bgVideo.blur && 'blur'}`}>
          <video key={bgVideo.backgroundVideo?.url} muted autoPlay loop webkit-playsinline="true" playsInline>
            <source src={bgVideo.backgroundVideo?.url} type="video/mp4" />
          </video>
        </div>
      }

      <motion.div id="artists"
        initial={{ opacity: "0" }}
        animate={{ opacity: "1" }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <a onClick={() => setmenuOpen(false)} href="#artists"><h1 style={nomargin}>Artists</h1></a>
        <div className={collapse}>
          {
            artists.edges.map(artist => {
              // const [name, photo] = artist
              return (
                <Artist
                  name={artist.node.name}
                  image={artist.node.photo}
                  video={artist.node.video}
                  links={[artist.node.youtubeLink, artist.node.spotifyLink, artist.node.instagramLink]}
                  icons={icons} />
              )
            })
          }
        </div>
      </motion.div>


      <div id="erfolge">
        <a onClick={() => setmenuOpen(false)} href="#erfolge"><h1 style={nomargin}>{lang == "de" ? "Erfolge" : "Achievements"}</h1></a>
        <div className={collapse}>
          <div className="grid">
            {
              erfolge.nodes.map(erfolg => {
                return (
                  <div className="erfolg">
                    <video key={erfolg.titel} muted autoPlay loop webkit-playsinline="true" playsInline>
                      <source src={erfolg.video.url} type="video/mp4" />
                    </video>
                    <h3>{erfolg.titel}</h3>
                    {
                      erfolg.erfolgListe.map(erfolg => {
                        return (
                          <li>{erfolg.ort} <span>{erfolg.anzahl}</span> </li>
                        )
                      })
                    }
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>

      <div id="jobs">
        <a onClick={() => setmenuOpen(false)} href="#jobs"><h1 style={nomargin}>Jobs</h1></a>
        <div className={collapse}>
          {
            jobs.map(job => {
              return (
                <Job data={job} />
              )
            })
          }
        </div>
      </div>

      <div id="kontakt">
        <a onClick={() => setmenuOpen(false)} href="#kontakt"><h1 style={nomargin}>{lang == "de" ? "Kontakt" : "Contact"}</h1></a>
        <div className={collapse}>
          <p>
            <StructuredText data={kontakt.adresse} />
          </p>

          <div id="mail"> <a href={'mailto:' + kontakt.eMail}>{kontakt.eMail}</a> </div>
        </div>
      </div>

      <div id="social-media">
        <a onClick={() => setmenuOpen(false)} href="#social-media"><h1 style={nomargin}>Social Media</h1></a>
        <div className={collapse}>
          <div className="icons">
            {content.socialMedia[0]?.youtubeLink &&
              <a href={content.socialMedia[0]?.youtubeLink} target="_blank"> <img src={ytIcon} alt="youtube Icon" /> </a>
            }
            {content.socialMedia[0]?.spotifyLink &&
              <a href={content.socialMedia[0]?.spotifyLink} target="_blank"> <img src={spotifyIcon} alt="Spotify Icon" /> </a>
            }
            {content.socialMedia[0]?.instagramLink &&
              <a href={content.socialMedia[0]?.instagramLink} target="_blank"> <img src={instaIcon} alt="Instagram Icon" /> </a>
            }
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
            <h4>{lang == "de" ? "Impressum" : "Imprint"}</h4></a>
          <motion.div
            style={{ overflow: 'hidden' }}
            initial={{ maxHeight: 0 }}
            variants={collapseVariants}
            animate={menuOpen ? 'close' : imprintOpen ? 'open' : 'close'}
            transition={{ duration: 0.5 }}
          >
            <div className='imprint'>
              <p>
                <StructuredText data={impressum} />
              </p>
            </div>
          </motion.div>
        </div>

        <div id="datenschutz">
          <a onClick={() => {
            setmenuOpen(false)
            setprivacyOpen(!privacyOpen)
            if (menuOpen === true) {
              setprivacyOpen(true)
            }
          }}
            href="#datenschutz">
            <h4>{lang == "de" ? "Datenschutz" : "Privacy Policy"}</h4></a>
          <motion.div
            style={{ overflow: 'hidden' }}
            initial={{ maxHeight: 0 }}
            variants={collapseVariants}
            animate={menuOpen ? 'close' : privacyOpen ? 'open' : 'close'}
            transition={{ duration: 0.5 }}
          >
            <div className='privacy'>
              <p>
                <StructuredText data={datenschutz} />
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default IndexPage

export const Head = () => <title>Hypnotize</title>


export const query = graphql`
{
    datoCmsHomepage {
      _allServicesLocales {
        locale
        value {
          value
        }
      }
      _allJobsLocales {
        locale
        value {
          eMail
          titel
          text {
            value
          }
        }
      }
      _allImpressumLocales {
        locale
        value {
          value
        }
      }
      _allDatenschutzLocales {
        locale
        value {
          value
        }
      }
      socialMedia {
        instagramLink
        spotifyLink
        youtubeLink
      }
    }
    allDatoCmsBackgroundVideo {
      nodes {
        blur
        backgroundVideo {
          url
        }
      }
    }
    allDatoCmsArtist(sort: {meta: {createdAt: ASC}}) {
      edges {
        node {
          name
          photo {
            gatsbyImageData
          }
          video {
            url
          }
          spotifyLink
          youtubeLink
          instagramLink
        }
      }
    }
    allDatoCmsErfolg(
      sort: {meta: {createdAt: ASC}}
      limit: 2
    ) {      
      nodes {
        titel
        video {
          url
        }
        erfolgListe {
          ort
          anzahl
        }
      }
    }
    allDatoCmsKontakt {
      nodes {
        adresse {
          value
        }
        eMail
      }
    }
  }
`