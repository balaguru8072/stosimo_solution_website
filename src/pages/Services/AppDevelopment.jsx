import React from 'react'
import AppsiteDevelopementSection from './App_Development/AppsiteDevelopementSection'
import OurServicesSection from './Web_Developement/OurServicesSection'
import SEO from '../../components/SEO';
import AppDevServicesSection from './App_Development/AppDevServicesSection';

function AppDevelopment() {
    return (
        <div>
            <SEO
                title="App Development - Stosimo | Android & iOS Apps"
                description="Best mobile app development company. We build high-performance Android & iOS apps for startups and enterprises."
                keywords="IT services, web development, app development, ui ux design, stosimo"
                canonical="/services/app-development"
            />
            <AppsiteDevelopementSection />
            <OurServicesSection />
            <AppDevServicesSection />
        </div>
    )
}

export default AppDevelopment