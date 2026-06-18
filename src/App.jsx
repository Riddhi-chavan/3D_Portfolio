import React from 'react'
import Hero from './sections/Hero'
import ShowCaseSection from './sections/ShowcaseSection'
import NavBar from './components/NavBar'
import LogoSection from './sections/LogoSection'
import FeatureCards from './sections/FeatureCards'

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <ShowCaseSection />
      <LogoSection />
      <FeatureCards />
    </>
  )
}

export default App