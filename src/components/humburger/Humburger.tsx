import HumburgerMenuItem from "./Humburger-item";

interface MenuItems {
    title: string
    url: string
}

const menu: MenuItems[] = [
    {
        "title": 'Главная',
        "url": '/'
    },
    {
        "title": "Настройки",
        "url": "/setting"
    }
];


const HumburgerMenu = () => {
    return (
        <div className="humburger">
            <div className="humburger-conteiner">
                <div className="humburger-list">
                    {menu.map((item: MenuItems) => {
                        return (
                            <HumburgerMenuItem>
                                {item.title}
                            </HumburgerMenuItem>
                        )
                    })}</div>
            </div>
        </div>
    )
}

export default HumburgerMenu;