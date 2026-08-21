import React from 'react'
import AllProjectSections from './All_Projects/AllProjectSections';
import SEO from '../../components/SEO';

function All_Projects() {
  return (
    <div>
        <SEO
          title="Stosimo - Best IT Services & Solutions Company"
          description="Stosimo is a top IT services company offering Web Development, App Development, UI/UX Design & Digital Marketing. We provide world-class IT infrastructure solutions."
          keywords="IT services, web development, app development, ui ux design, stosimo"
          canonical="/aboutus"
        />
        <AllProjectSections />
    </div>
  )
}

export default All_Projects