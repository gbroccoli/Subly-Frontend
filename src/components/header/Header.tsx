
import Layout from "@/components/layout/Layout";
import Logotip from "@/components/logotip/Logotip";
import Profile from "@/components/profile/Profile";


const Header = () => {
    return (
        <header className="flex-[0_0_auto]">
            <Layout classStyle="my-[20px]">
                <div className="flex items-center shadow p-4 rounded-md justify-between">
                    <Logotip link={true} />
                    <Profile name="Администратор" />
                </div>
            </Layout>
        </header>
    )
}

export default Header;