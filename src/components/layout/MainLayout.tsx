import { Outlet } from "react-router-dom";
import HumburgerMenu from "../humburger/Humburger";

const MainLayoutPage = () => {

    return (
        <div className="main flex w-full h-[100vh] flex-col sm:flex-row overflow-hidden">
            <HumburgerMenu />
            <div className="w-full overflow-y-auto px-[30px] py-[35px] h-[100vh]">
                <div className="overflow-y-auto w-full">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default MainLayoutPage;