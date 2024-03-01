import { layout_func_click } from "@/app/models/main-model";
import { FC } from "react";

interface btnProps extends layout_func_click {
    classStyle?: string
}

const BtnIcon: FC<btnProps> = ({children, func, classStyle}) => {
    return (
        <button className={`flex items-center justify-center ${classStyle}`} onClick={func}>
            {children}
        </button>
    )
}

export default BtnIcon;