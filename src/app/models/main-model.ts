import { ReactNode } from "react";


export interface MainLayout {
    children?: ReactNode
}


export interface layout_props extends MainLayout {
    classStyle?: string
}