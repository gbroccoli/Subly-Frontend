import { layout_props } from "@/app/models/main-model";
import { FC } from "react";



const HumburgerMenuItem: FC<layout_props> = ({ children, classStyle }) => {
    return (
        <div className={classStyle}>
            {children}
        </div>
    )
}

export default HumburgerMenuItem;