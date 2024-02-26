import { ElementType, useRef, useState } from "react";
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
        "title": 'profile',
        "icon": Home,
        "url": '/profile'
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
        <div className={`bg-white humburger show md:w-max-350px border transition-all duration-300 p-2 ${show ? 'h-[550px] md:h-full md:w-[350px]' : 'h-[100px] md:h-full w-full md:w-[120px]'} flex flex-col py-8 px-6 md:py-16 md:px-10 space-y-6`}>
            <BtnIcon func={clickShow} classStyle="p-2 border rounded-xl h-[40px] w-[40px]" >
                <Menu_3 />
            </BtnIcon>
            <div className="w-full overflow-hidden space-y-5">
                <RwenderItems />
            </div>
        </div>
    )
}

export default HumburgerMenu;