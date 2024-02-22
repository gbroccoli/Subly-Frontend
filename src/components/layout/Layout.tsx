import { layout_props } from "@/app/models/main-model";
import { FC } from "react"

const Layout: FC<layout_props> = ({ children, classStyle }) => {
    return (
        <div className={`container mx-auto flex-[1_0_auto] ${classStyle}`}>
            {children}
        </div>
    )
}

export default Layout;