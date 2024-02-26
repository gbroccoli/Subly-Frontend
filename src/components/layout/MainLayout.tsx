import { useState } from "react"
import HumburgerMenu from "../humburger/Humburger"
import Layout from "./Layout"
import { Outlet } from "react-router-dom"
import "./test.css"


const MainLayout = () => {

    const [show, setShow] = useState<boolean>(false)

    const showIs = () => {
        setShow(pre => !pre)
    }

    return (
        <div className="w-full md:h-[100vh] flex flex-col md:flex-row transition-all duration-300">
            <HumburgerMenu />
            <div className="w-full h-full p-2 hrum">
                Test2
            </div>
        </div>
    )
}

export default MainLayout;