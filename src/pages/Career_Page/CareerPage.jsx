import React from 'react'
import CareerForm from './CarrerForm/Career_form'
import JobOpenings from './Job_Opening/JobOpenings'
import SEO from '../../components/SEO';

function CareerPage() {
  return (
    <div>
        <SEO
          title="Stosimo - Best IT Services & Solutions Company"
          description="Stosimo is a top IT services company offering Web Development, App Development, UI/UX Design & Digital Marketing. We provide world-class IT infrastructure solutions."
          keywords="IT services, web development, app development, ui ux design, stosimo"
          canonical="/career"
        />
        <JobOpenings />
        <CareerForm />
    </div>
  )
}

export default CareerPage