import Layout from "../layout/Layout"
import Logotip from "../logotip/Logotip";


const Header = () => {
    return (
        <header>
            <Layout classStyle="my-[20px]">
                <div className="flex items-center shadow p-4 rounded-md justify-between">
                    <Logotip/>

                    
                </div>
            </Layout>
        </header>
    )
}

export default Header;