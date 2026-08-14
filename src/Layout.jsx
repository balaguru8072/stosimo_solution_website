import { Outlet } from "react-router-dom"
import HeaderNav from "./components/Header/HeaderNav"
import FooterSection from "./components/Footer/FooterSection"
import ScrollToTop from "./components/ScrollToTop"

const Layout = () =>{
    return(
        <>
            <ScrollToTop />
            <HeaderNav />
            <main>
                <Outlet />
            </main>
            <FooterSection />
        </>
    )
}

export default Layout