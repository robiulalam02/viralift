import React from 'react'
import HeroMain from '../components/HeroMain'
import BentoGrid from '../components/BentoGrid'
import Marquee from '../components/Marquee'
import DashboardPreview from '../components/DashboardPreview'
import Pricing from '../components/Pricing'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <div>
      <HeroMain />
      <BentoGrid />
      <Marquee />
      <DashboardPreview />
      <Pricing />
      <Contact />
    </div>
  )
}

export default Home
