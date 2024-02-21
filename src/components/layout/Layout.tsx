import { FC, ReactNode } from "react"

interface layout_props {
    children: ReactNode,
    classStyle?: string
}

const Layout: FC<layout_props> = ({ children, classStyle }) => {
    return (
        <div className={`container mx-auto ${classStyle}`}>
            {children}
        </div>
    )
}

export default Layout;