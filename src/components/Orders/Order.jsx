import React from 'react'
import {orderDetails} from '../../utils/orders';
import { imageArray } from '../../utils/imageArray';
import {numberFormat} from '../../utils/helper';

export default function Order() {


  return (
    <div className="p-2 bg-dark rounded-xl">
      <h1 className="ml-2 mb-3 text-2xl font-semibold">Recent Orders</h1>
      <div className="h-[61vh] overflow-y-auto px-3 py-2">
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="border-b px-4 py-2 text-left">Customer</th>
            <th className="border-b px-4 py-2 text-left">Order No.</th>
            <th className="border-b px-4 py-2 text-left">Amount</th>
            <th className="border-b px-4 py-2 text-left">Status</th>
          </tr> 
        </thead>
        <tbody>
          {orderDetails.map((order, index) =>{
            const {id, name, orderNo, amount, status} = order;
            const imageSrc = imageArray[index % imageArray.length]?.src;
            return(
              <tr key={id} className="text-sm font-semibold tracking-wide">
                <td className="flex items-center gap-2  border-b px-4 py-2 justify-start">
                  <img src={imageSrc} alt={name} className='w-10 h-10 rounded-full object-cover'/>
                  {name}
                  </td>
                <td className="border-b px-4 py-2 text-left">{orderNo}</td>
                <td className="border-b px-4 py-2 text-left">{numberFormat(amount)}</td>
                <td className='border-b px-4 py-2 text-left capitalize' >
                  <span className={`${status === 'delivered'? 'bg-green-600 text-green-300':'text-red-300 bg-red-600'} rounded-xl px-2 py-1`}>{status}</span></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
    </div>
  )
}
