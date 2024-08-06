import React from 'react'
import { FaCaretUp } from "react-icons/fa";
import { numberFormat } from '../../utils/helper'
import CircularProgressBar from './PieChart';

export default function Profit() {


  return (
    <div className="p-2 bg-dark rounded-xl">
        <div className='flex justify-between h-42 px-2 py-1'>
            <section className="flex flex-col justify-around">
              <h1 className="font-semibold">Net Profit</h1>
              <h2 className='text-3xl font-bold'>{numberFormat(13115.15)}</h2>
              <span className='text-[#00CA8C]'><FaCaretUp size={20} className='inline-block mx-1'/>5%</span>
            </section>
            <section>
              <CircularProgressBar/>
              <p className='text-xs leading-3'>*&nbsp;The values here has been rounded off.</p>
            </section>
        </div>        
    </div>
  )
}
