import React from 'react'
import { IoMdLogOut } from "react-icons/io";
import { Link, Outlet } from 'react-router-dom';

import {sideBarLinks} from '../../utils/sideBarLinks';
import NavBarInfo from '../NavBar/NavBarInfo';

export default function SideBar() {


    return (
        <div className='sidebar-container dark w-20 flex flex-col items-center justify-between'>
            <div className='flex flex-col h-[40vh] justify-around items-center'>
            {sideBarLinks.map((sideBarLink)=>{
                const {id, name, icon} = sideBarLink;
                return(
                    <section key={id}>
                    <Link to={name} className='flex items-center space-x-2'>
                        <span className='hover:text-lightBlue'>{icon}</span>
                    </Link>
                </section>
                )
            })}
            </div>
            <div className='sm:hidden mt-24'>
            <NavBarInfo/>
            </div>
            <section className='w-[80%] mx-auto rounded-lg my-2 py-2 hover:bg-lightBlue'>
            <Link to='/logout'><IoMdLogOut size={20} className='w-full text-center'/></Link>
            </section>
            <Outlet/>
        </div>
    )
}
