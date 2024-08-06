import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";

import LogoImage from "../../assets/logo.svg";
import NavBarInfo from "./NavBarInfo";


export default function NavBar() {
    const [searchValue, setSearchValue] = useState("");

    const handleChange = (e) => {
        setSearchValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // add necessary condition
        setSearchValue("");
    };
    return (
        <div className="dark w-full flex justify-between pb-2">
        <div className="flex">
            <Link to="/">
            <img src={LogoImage} alt="logo" className="w-8 m-5" />
            </Link>
            <div className="ml-10 flex items-center">
            <form
                className="dark-gray border border-gray-600 rounded-md blur-bg flex w-[15rem] gap-3 h-10 pl-3"
                onSubmit={handleSubmit}
            >
                <button type="submit" className="search-button">
                <BsSearch />
                </button>
                <input
                type="search"
                placeholder="Search"
                value={searchValue}
                onChange={handleChange}
                required
                className="border-none bg-transparent px-1 text-white placeholder-eggshell w-full "
                />
            </form>
            </div>
        </div>
        <div className='hidden sm:flex'>
            <NavBarInfo />
        </div>
        </div>
    );
}
