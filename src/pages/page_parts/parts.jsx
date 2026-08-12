import React from 'react'
import HomeBanner from '../HomeBanner'
import ServiceCards from '../ServiceCards'
import ExperienceSection from '../ExperienceSection'
import ServiceListCards from '../ServicesListofCards'
import ProjectsSection from '../ProjectsSection'
import ContactSection from '../../components/Contactus/ContactSection'

function Parts() {
  return (
    <div>
        <HomeBanner />
        <ServiceCards />
        <ExperienceSection />
        <ServiceListCards />
        <ProjectsSection />
        <ContactSection />
    </div>
  )
}

export default Parts