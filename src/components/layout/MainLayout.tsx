import Header from "../header/Header"
import HumburgerMenu from "../humburger/Humburger"
import Layout from "./Layout"
import { Outlet } from "react-router-dom"


const MainLayout = () => {
    return (
        <>
            <HumburgerMenu />
            <Header />
            <Layout>
                <Outlet/>
            </Layout>
        </>
    )
}

export default MainLayout;