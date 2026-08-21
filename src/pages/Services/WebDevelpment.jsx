import React from 'react'
import WebsiteDevelopmentSection from './Web_Developement/WebsiteDevelopmentSection'
import OurServicesSection from './Web_Developement/OurServicesSection'
import WebDevServicesSection from './Web_Developement/WebDevServicesSection'
import SEO from '../../components/SEO';

function WebDevelpment() {
    return (
        <div>
            <SEO
                title="Web Development Company - Stosimo | React, Next.js"
                description="Custom website development services in Karaikal. We build fast, SEO friendly websites using React, Next.js & MERN stack."
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