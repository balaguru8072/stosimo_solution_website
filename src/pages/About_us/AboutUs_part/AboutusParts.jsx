import React from 'react'
import About_Banner from '../About_Banner'
import AboutCompanySection from '../AboutCompanySection '
import ServiceListCards from '../../ServicesListofCards'
import LetsTalkCarousel from '../LetsTalkCarousel'
import WhyChooseUsSection from '../WhyChooseUsSection'


function AboutusParts() {
  return (
    <div>
        <About_Banner />
        <AboutCompanySection />
        <ServiceListCards />
        <WhyChooseUsSection />
        <LetsTalkCarousel />
    </div>
  )
}

export default AboutusParts