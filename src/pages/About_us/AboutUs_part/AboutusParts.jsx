import React from 'react'
import About_Banner from '../About_Banner'
import AboutCompanySection from '../AboutCompanySection '
import ServiceListCards from '../../ServicesListofCards'
import LetsTalkCarousel from '../LetsTalkCarousel'
import WhyChooseUsSection from '../WhyChooseUsSection';
import SEO from '../../../components/SEO';

function AboutusParts() {
  return (
    <div>
        <SEO
          title="Stosimo - Best IT Services & Solutions Company"
          description="Stosimo is a top IT services company offering Web Development, App Development, UI/UX Design & Digital Marketing. We provide world-class IT infrastructure solutions."
          keywords="IT services, web development, app development, ui ux design, stosimo"
          canonical="/aboutus"
        />
        <About_Banner />
        <AboutCompanySection />
        <ServiceListCards />
        <WhyChooseUsSection />
        <LetsTalkCarousel />
    </div>
  )
}

export default AboutusParts