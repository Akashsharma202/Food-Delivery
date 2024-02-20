/* eslint-disable no-unused-vars */
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import download from "./download.jpeg";
const Navbar = () => {


    return (
        <nav className="border-gray-200 bg-black text-white">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                <img src={download} className="h-8 rounded-full" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap">Restaurant Order WebApp</span>
                </a>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-[#171717] md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
                        <li>
                            <NavLink to="/" className="block py-2 px-3 text-white rounded  md:hover:bg-transparent md:border-0 md:hover:text-gray-700 md:p-0">Restaurants</NavLink>
                        </li>
                        <li>
                            <NavLink to="/form" className="block py-2 px-3 text-white rounded  md:hover:bg-transparent md:border-0 md:hover:text-gray-700 md:p-0 ">Admin</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
