import { Link } from "react-router";
import { ModeToggle } from "../mode-toggler";


const Navbar = () => {
    return (
        <div>
            <nav className="max-w-7xl mx-auto h-16 flex items-center gap-3 px-5">
                <div className="flex justify-around w-full">
                    <div className="flex items-center">
                        <span className="font-bold ml-2">Task</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Link to={"/"} className="text-gray-700 hover:text-blue-500">Home</Link>
                        <Link to={"/users"} className="text-gray-700 hover:text-blue-500">User</Link>
                        <Link to={"/tasks"} className="text-gray-700 hover:text-blue-500">Task</Link>
                        <ModeToggle />
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;