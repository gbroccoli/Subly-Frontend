import { Link } from "react-router-dom";
import Layout from "../../components/layout/Layout";


const Erorr404 = () => {

    document.title = "404 Not Found - Subly";

    return (
        <>
            <Layout classStyle="max-w-[1920px] my-[50px] flex items-center p-[30px]">
                <div className="gird grid-cols-6">
                    <div className="space-y-4">
                        <div className="col-start-1 roboto-bold text-[30px]">
                            Оу, данная страница не найдена!
                        </div>
                        <div className="text-wrap">
                            Может данная страница появится когда-то
                        </div>
                        <div>
                            <button type="button" className="1 bg-green-900 text-white rounded px-[20px] py-[15px]">
                                <Link to="/">На главную</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Erorr404;