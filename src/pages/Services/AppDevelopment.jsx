import React from 'react'
import AppsiteDevelopementSection from './App_Development/AppsiteDevelopementSection'
import OurServicesSection from './Web_Developement/OurServicesSection'
import WebDevServicesSection from './Web_Developement/WebDevServicesSection'

function AppDevelopment() {
    return (
        <div>
            <AppsiteDevelopementSection />
            <OurServicesSection />
            <WebDevServicesSection />
        </div>
    )
}

export default AppDevelopment