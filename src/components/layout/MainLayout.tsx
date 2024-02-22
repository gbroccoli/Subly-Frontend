import Header from "../header/Header"
import Layout from "./Layout"
import { Outlet } from "react-router-dom"


const MainLayout = () => {
    return (
        <>
            <Header />
            <Layout>
                <Outlet/>
            </Layout>
        </>
    )
}

export default MainLayout;