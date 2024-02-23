import { ElementType, useState } from "react";
import HumburgerMenuItem from "./Humburger-item";
import BtnIcon from "@/UI/button/bntIcon";
import Menu_3 from "@/UI/icon/Menu-3";
import "./animate.css"
import Home from "@/UI/icon/Home";

interface MenuItems {
    title: string
    url: string
    icon: ElementType
}

const menu: MenuItems[] = [
    {
        "title": 'Главная',
        "icon": Home,
        "url": '/'
    },
    {
        "title": "Настройки",
        "icon": Menu_3,
        "url": "/setting"
    }
];


const RwenderItems = () => {

    return (
        <>
            {menu.map((item: MenuItems, i) => {
                return (
                    <HumburgerMenuItem classStyle="cursor-pointer" link={item.url} key={i}>
                        <div className="p-2 hover:bg-gray-600/35 rounded-md flex items-center">
                            <div>
                                <item.icon />
                            </div>
                            <span className="ml-[20px]">
                                {item.title}
                            </span>
                        </div>
                    </HumburgerMenuItem>
                )
            })}
        </>
    )
}

const HumburgerMenu = () => {

    const [show, setShow] = useState<boolean>(false)

    const clickShow = () => {
        setShow((rew) => !rew)
    }

    return (
        <div className={`humburger fixed top-0 left-0 h-full transition-width`}>
            <div className={`humburger shadow-md bg-white ${show ? 'show' : ""} rounded-r-[40px] h-full overflow-hidden px-9 py-16`}>
                <div className="humburger-button overflow-hidden">
                    <BtnIcon classStyle="shadow-md p-2 hover:shadow-inner hover:bg-gray-600/35 rounded-md" func={clickShow}>
                        <Menu_3 />
                    </BtnIcon>
                </div>
                <div className="humburger-content mt-[150px] overflow-hidden space-y-8">
                    <RwenderItems />
                </div>
            </div>
        </div>
    )
}

export default HumburgerMenu;