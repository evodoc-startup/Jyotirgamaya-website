import React from 'react'
import Hero from './Components/main'
import JourneySection from './Components/journey'
import PricingSection from './Components/pricing'
import PhotoSlider from './Components/slider'
import Testimonials from './Components/testimonials'
import Map from './Components/map'

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
