import React from 'react'
import UiUxDesign from './Ui_Ux_Designes/UiUxDesign'
import OurServicesSection from './Web_Developement/OurServicesSection'
import SEO from '../../components/SEO';
import UiUxServicesSection from './Ui_Ux_Designes/UiUxServicesSection';

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
            <UiUxServicesSection />
        </div>
    )
}

export default UiAndUxDesign