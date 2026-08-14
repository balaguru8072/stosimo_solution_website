import { Outlet } from "react-router-dom"
import HeaderNav from "./components/Header/HeaderNav"
import FooterSection from "./components/Footer/FooterSection"

const Layout = () =>{
    return(
        <>
            <HeaderNav />
            <main>
                <Outlet />
            </main>
            <FooterSection />
        </>
    )
}

export default Layout