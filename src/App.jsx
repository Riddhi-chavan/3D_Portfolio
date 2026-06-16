import React from 'react'
import Hero from './sections/Hero'
import ShowCaseSection from './sections/ShowcaseSection'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <ShowCaseSection />
    </>
  )
}

export default App