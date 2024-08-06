import React from 'react'
import Feedback from '../components/Feedback/Feedback';
import Order from '../components/Orders/Order';
import Menu from '../components/Menu/Menu';
import Chart from '../components/BarChart/Chart';
import Profit from '../components/Amount/Profit';
import Counter from '../components/Amount/Counter';

export default function OverView() {
  return (
    <div className="dashboard-container overflow-y-auto my-2 rounded-lg">
    <h1 className="mx-5 my-3 font-bold text-2xl tracking-wide">Dashboard</h1>
    <div className="overview-container">
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3'>
        <Counter/>
      </div>
      <div>
        <Profit/>
      </div>
      <div>
        <Chart/>
      </div>
      <div>
        <Menu/>
      </div>
      <div>
        <Order/>
      </div>
      <div>
        <Feedback/>
      </div>
    </div>
    </div>
  )
}
