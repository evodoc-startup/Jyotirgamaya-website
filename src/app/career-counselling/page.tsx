import React from 'react'
import Hero from './components/main'
import JourneySection from './components/journey'
import PricingSection from './components/pricing'
import PhotoSlider from './components/slider'
import Testimonials from './components/testimonials'
import Map from './components/map'

function page () {
  return (
    <>
      <Hero />
      <Map />
      <JourneySection />
      <PricingSection />
      <PhotoSlider />
      <Testimonials />
    </>
  )
}

export default page
