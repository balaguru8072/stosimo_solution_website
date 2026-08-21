import React from 'react'
import AppsiteDevelopementSection from './App_Development/AppsiteDevelopementSection'
import OurServicesSection from './Web_Developement/OurServicesSection'
import WebDevServicesSection from './Web_Developement/WebDevServicesSection'
import SEO from '../../components/SEO';

function AppDevelopment() {
    return (
        <div>
        <SEO
          title="Stosimo - Best IT Services & Solutions Company"
          description="Stosimo is a top IT services company offering Web Development, App Development, UI/UX Design & Digital Marketing. We provide world-class IT infrastructure solutions."
          keywords="IT services, web development, app development, ui ux design, stosimo"
          canonical="/services/app-development"
        />
            <AppsiteDevelopementSection />
            <OurServicesSection />
            <WebDevServicesSection />
        </div>
    )
}

export default AppDevelopment