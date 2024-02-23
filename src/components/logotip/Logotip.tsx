import { layout_props } from "@/app/models/main-model";
import { FC } from "react";
import { Link } from "react-router-dom";

interface LogotipProps extends Omit<layout_props, 'children'> {
    link?: boolean
}

const LinkLogotip: FC<Omit<layout_props, 'children'>>  = ({classStyle}) => {
    return (
        <>
            <Link to="/">
                <h1 className={`1 text-[32px] roboto-black ${classStyle}`}>Subly</h1>
            </Link>
        </>
    )
}

const Logotip: FC<LogotipProps> = ({link = false, classStyle = ""}) => {
    return (
        <>
            {link ? <LinkLogotip classStyle={classStyle} /> : <h1 className="1 text-[32px] roboto-black">Subly</h1>}
        </>
    )
}

export default Logotip;