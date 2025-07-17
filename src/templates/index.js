import React, { useState } from 'react'
import InvitationGallery from '../components/gallery/InvitationGallery'
import EventsGallery from '../components/gallery/EventsGallery'
import WeddingGallery from '../components/gallery/WeddingGallery'
import { navigations } from '../constants'
import Home from './Home'
import Navbar from '../components/Navbar'
import NavButton from '../components/molecules/NavButton'
import AboutUs from '../components/home/AboutUs'

const Template = () => {
  const [activeNavigation, setNavigation] = useState(navigations.home)
  const [isNavbarEnabled, setNavbar] = useState(false)

  const displayTemplate = {
    [navigations.home]: <Home />,
    [navigations.weddingGallery]: <WeddingGallery />,
    [navigations.invitationGallery]: <InvitationGallery />,
    [navigations.eventsGallery]: <EventsGallery />,
    [navigations.aboutUs]: <AboutUs />
  }

  const setupNavbar = () => {
    setNavbar(!isNavbarEnabled)
    const targetEl = document.getElementsByTagName('body')
    targetEl[0].style.overflowY = !isNavbarEnabled ? 'hidden' : 'scroll'
  }

  const setPage = (pageName) => {
    setupNavbar()
    setNavigation(pageName)
  }

  return (
    <div style={{ position: 'relative' }}>
      {isNavbarEnabled ? (
        <div style={{ position: 'fixed', width: '100%', height: '100%', zIndex: 999 }}>
          <Navbar closeNav={() => setupNavbar()} setNavigation={(pageName) => setPage(pageName)}/>
        </div>
      ) : <NavButton reverseBars onClick={() => setupNavbar()} />}
      {displayTemplate[activeNavigation]}
    </div>
  )
}

export default Template
