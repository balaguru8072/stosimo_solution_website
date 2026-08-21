import React from 'react'
import SoftwareDevelopmentSection from './Project_Details/SoftwareDevelopmentSection';
import SEO from '../../components/SEO';

function Project_Details() {
  return (
    <div>
        <SEO
          title="Stosimo - Best IT Services & Solutions Company"
          description="Stosimo is a top IT services company offering Web Development, App Development, UI/UX Design & Digital Marketing. We provide world-class IT infrastructure solutions."
          keywords="IT services, web development, app development, ui ux design, stosimo"
          canonical="/aboutus"
        />
        <SoftwareDevelopmentSection />
    </div>
  )
}

export default Project_Details