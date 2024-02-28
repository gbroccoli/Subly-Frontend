import { Link } from "react-router-dom";


const Erorr404 = () => {

    document.title = "404 Not Found - Subly";

    return (
        <div className="w-full h-[100vh] flex items-center">
            <div className="gird grid-cols-6 ml-[30px] md:ml-[150px]">
                <div className="space-y-4">
                    <div className="col-start-1 roboto-bold text-[30px]">
                        Оу, данная страница не найдена!
                    </div>
                    <div className="text-wrap">
                        Может данная страница появится когда-то
                    </div>
                    <div>
                        <Link className="1 bg-green-900 text-white rounded px-[20px] py-[15px]" to="/">На главную</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Erorr404;