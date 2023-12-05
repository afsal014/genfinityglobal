import React from 'react'
import Header from '../components/header/Header'
import Hero from '../components/hero/Hero'
import YourComponent from '../components/YourComponent'

function LandingPage() {
  return (
    <div>
      <Header/>
      <Hero/>
      <YourComponent />
      {/* <div data-aos="fade-up">
        <h1 data-aos="fade-up">Landing Page</h1>
      </div> */}
    </div>
  )
}

export default LandingPage
