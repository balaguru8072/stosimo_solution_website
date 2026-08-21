import React from 'react'
import WebsiteDevelopmentSection from './Web_Developement/WebsiteDevelopmentSection'
import OurServicesSection from './Web_Developement/OurServicesSection'
import WebDevServicesSection from './Web_Developement/WebDevServicesSection'
import SEO from '../../components/SEO';

function WebDevelpment() {
    return (
        <div>
            <SEO
                title="Stosimo - Best IT Services & Solutions Company"
                description="Stosimo is a top IT services company offering Web Development, App Development, UI/UX Design & Digital Marketing. We provide world-class IT infrastructure solutions."
                keywords="IT services, web development, app development, ui ux design, stosimo"
                canonical="/services/web-development"
            />
            <WebsiteDevelopmentSection />
            <OurServicesSection />
            <WebDevServicesSection />
        </div>
    )
}

export default WebDevelpment