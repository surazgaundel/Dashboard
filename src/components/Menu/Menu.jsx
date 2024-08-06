import React from 'react';
import { BiTargetLock } from "react-icons/bi";
import { PiHamburgerLight } from "react-icons/pi";
import { BiDish } from "react-icons/bi";
import { FaAngleRight } from "react-icons/fa6";

export default function Menu() {

    const itemsArray=[
        {
            id:'01',
            name:'goals',
            icon: <BiTargetLock size={20}/>,
            style:'text-[#F45C5B] bg-[#633239]'
        },
        {
            id:'02',
            name:'popular dishes',
            icon:<PiHamburgerLight size={20}/>,
            style: 'text-[#4560FC] bg-[#28346A]'
        },
        {
            id:'03',
            name:'menu',
            icon:<BiDish size={20}/>,
            style: 'text-[#2E91C3] bg-[#204A60]'
        },
    ]
  return (
    <div className="p-2 bg-dark rounded-xl">
        <div className='px-4 py-2 flex flex-col gap-2'>
        {
            itemsArray.map((item)=>{
                const {id,name,icon,style} = item;
                return(
                    <section key={id} className='flex h-20 items-center justify-between'>
                        <h1 className='flex gap-2 items-center capitalize text-lg'>
                            <span className={`${style} rounded-full p-5`}>{icon}</span>
                            {name}
                        </h1>
                        <span className='bg-lightGray p-2 rounded-full hover:bg-slate-400 cursor-pointer'>
                        <FaAngleRight size={14}/>
                        </span>
                    </section>
                )
            })
        }
        </div>
    </div>
  )
}
