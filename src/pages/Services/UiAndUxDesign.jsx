import React from 'react'
import UiUxDesign from './Ui_Ux_Designes/UiUxDesign'
import OurServicesSection from './Web_Developement/OurServicesSection'
import WebDevServicesSection from './Web_Developement/WebDevServicesSection'
import SEO from '../../components/SEO';

function UiAndUxDesign() {
    return (
        <div>
            <SEO
                title="Stosimo - Best IT Services & Solutions Company"
                description="Stosimo is a top IT services company offering Web Development, App Development, UI/UX Design & Digital Marketing. We provide world-class IT infrastructure solutions."
                keywords="IT services, web development, app development, ui ux design, stosimo"
                canonical="/services/ui-ux-design"
            />
            <UiUxDesign />
            <OurServicesSection />
            <WebDevServicesSection />
        </div>
    )
}

export default UiAndUxDesign