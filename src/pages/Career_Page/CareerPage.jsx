import React from 'react'
import CareerForm from './CarrerForm/Career_form'
import JobOpenings from './Job_Opening/JobOpenings'
import SEO from '../../components/SEO';

function CareerPage() {
  return (
    <div>
      <SEO
        title="Careers at Stosimo - Hiring Web & App Developers"
        description="Join Stosimo team! Openings for React Developers, UI/UX Designers. Apply now for IT jobs in Karaikal."
        keywords="IT services, web development, app development, ui ux design, stosimo"
        canonical="/career"
      />
      <JobOpenings />
      <CareerForm />
    </div>
  )
}

export default CareerPage