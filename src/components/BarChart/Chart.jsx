import {useEffect, useState} from 'react'
import { analyticsData } from '../../utils/barChart';
import ChartBar from './ChartBar';

const timeAnalytics=[
  {
    id:'t1',
    name:'daily',
  },
  {
    id:'t2',
    name:'weekly',
  },
  {
    id:'t3',
    name:'monthly',
  },
  {
    id:'t4',
    name:'yearly',
  },
]
export default function Chart() {

  const [activity, setActivity] =useState([timeAnalytics[0]]);
  const [data, setData] = useState();
  
  
  const handleActivity=(e)=>{
    const value=e.target.value;
    const requiredData=timeAnalytics.find(data=>data.name===value);
    setActivity(requiredData);
  }

  useEffect(()=>{
    if (activity) {
      const requiredChartData = analyticsData.filter(data => data.type === (activity.name || 'daily'));
      setData(requiredChartData.length > 0 ? requiredChartData[0].chartData : []);
    }
  },[activity])
  
  return (
    <div className="p-2 bg-dark rounded-xl">
        <div className="flex flex-row justify-between items-center gap-1 p-2 rounded-lg">
        <h1 className="ml-2 mb-3 text-2xl font-semibold">Activity</h1>
        <form className="flex justify-end items-center">
          <div className="bg-lightGray px-4 py-2 rounded-3xl">
            <select 
            onChange={handleActivity} 
            defaultValue={activity.name} 
            className='bg-lightGray capitalize font-semibold rounded-3xl cursor-pointer' 
            >
              {
                timeAnalytics.map(dataList=>{
                  const {id,name}=dataList;
                  return(
                    <option key={id} value={name} className='capitalize bg-dark border-none'>{name}</option>
                  )
                })
              }
            </select>
          </div>
        </form>
      </div>
      <div className=" h-[30vh] w-full">
        <ChartBar item={data}/>
        </div> 
    </div>
  )
}
