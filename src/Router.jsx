import React from 'react';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout'; // Correct import
import Parts from './pages/page_parts/parts';
import AboutusParts from './pages/About_us/AboutUs_part/AboutusParts';
import WebDevelpment from './pages/Services/WebDevelpment';
import AppDevelopment from './pages/Services/AppDevelopment';
import UiAndUxDesign from './pages/Services/UiAndUxDesign';
import Project_Details from './pages/Projects/Project_Details';
import All_Projects from './pages/Projects/All_Projects';
import CareerPage from './pages/Career_Page/CareerPage';
import ContactSection from './components/Contactus/ContactSection';
import JobDetails from './pages/Career_Page/Job_Opening/JobDetails';
import DigitalMaketing from './pages/Services/Digital_Maket/DigitalMaketing';
import AllServicesSection from './pages/Services/All_Service/AllServicesSection';

const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Parts /> },
      { path: 'aboutus', element: <AboutusParts /> },
      { path: 'services/all-services', element: <AllServicesSection /> },
      { path: 'services/web-development', element: <WebDevelpment /> },
      { path: 'services/app-development', element: <AppDevelopment /> },
      { path: 'services/ui-ux-design', element: <UiAndUxDesign /> },
      { path: 'services/digital-marketing', element: <DigitalMaketing /> },
      { path: 'projects/details', element: <Project_Details /> },
      { path: 'projects', element: <All_Projects /> },
      { path: 'career', element : <CareerPage /> },
      { path: 'career/job/:id', element: <JobDetails /> },
      { path: 'contact', element: <ContactSection /> },
      // IMPORTANT: 404 ku intha route add pannu
      { path: '*', element: <Parts /> }
    ]
  }
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;