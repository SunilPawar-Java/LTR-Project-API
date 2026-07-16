import React from 'react'
import NavBar from "../components/pages/home/NavBar.jsx";
import FooterSection from "../components/pages/home/FooterSection.jsx";
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <>
            <NavBar/>
            <Outlet/>
            <FooterSection/>
        </>
    )
}
export default Layout
