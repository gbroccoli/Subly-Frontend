import { layout_props } from "@/app/models/main-model";
import { FC } from "react";

interface HumburgerMenuItemProps extends layout_props {
    link: string
}

const HumburgerMenuItem: FC<HumburgerMenuItemProps> = ({ children, classStyle, link }) => {

    const linkTo = (link: string) => {
        window.location.href = link
    }

    return (
        <div className={classStyle} onClick={() => linkTo(link)}>
            {children}
        </div>
    )
}

export default HumburgerMenuItem;