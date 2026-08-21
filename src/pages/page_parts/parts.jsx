import React from 'react'
import HomeBanner from '../HomeBanner'
import ServiceCards from '../ServiceCards'
import ExperienceSection from '../ExperienceSection'
import ServiceListCards from '../ServicesListofCards'
import ProjectsSection from '../ProjectsSection'
import ContactSection from '../../components/Contactus/ContactSection';
import SEO from '../../components/SEO';

function Parts() {
  return (
    <div>
      <SEO
        title="Stosimo - Best IT Services & Solutions Company"
        description="Stosimo is a top IT services company offering Web Development, App Development, UI/UX Design & Digital Marketing. We provide world-class IT infrastructure solutions."
        keywords="IT services, web development, app development, ui ux design, stosimo"
        canonical="/"
      />
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