import { FC } from "react";
import { Link } from "react-router-dom";

interface LogotipProps {
    link?: boolean
}

const LinkLogotip = () => {
    return (
        <>
            <Link to="/">
                <h1 className="1 text-[32px] roboto-black">Subly</h1>
            </Link>
        </>
    )
}

const Logotip: FC<LogotipProps> = ({link = false}) => {
    return (
        <>
            {link ? <LinkLogotip /> : <h1 className="1 text-[32px] roboto-black">Subly</h1>}
        </>
    )
}

export default Logotip;