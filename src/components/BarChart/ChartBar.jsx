/* eslint-disable react/prop-types */
import React from 'react'
import { YAxis,XAxis, CartesianGrid, BarChart,Tooltip,Bar,ResponsiveContainer, Cell } from "recharts";

export default function ChartBar({item}) {

    const formatYAxis = (tickItem) => {
        if (tickItem >= 1000) {
          return `${tickItem / 1000}k`;
        }
        return tickItem;
      };

    return (
    <ResponsiveContainer width="99%" height="100%">
        <BarChart 
            data={item}
            >
            <CartesianGrid 
                opacity={0.1}
                vertical={false}
                strokeDasharray={10}/>
            <XAxis dataKey="name" axisLine={false} tickLine={false}/>
            <YAxis axisLine={false} tickLine={false} tickFormatter={formatYAxis} />
            <Tooltip 
                cursor={{fill: 'transparent'}}
                position={{offset:'-5'}}
                content={<CustomTooltip/>}/>
            <Bar 
                dataKey="total" 
                barCategoryGap={20} 
                strokeWidth={1} 
                width={2} 
                radius={20}
                barSize={30}
                >
                {
                item?.map((entry, index) => (
                <Cell key={`cell-${index}`} fill='#7394FD'/>
                ))
                }
                </Bar>
        </BarChart>
        </ResponsiveContainer>
    )
}

function CustomTooltip({active,payload}){
    if(active){
        return(
            <div className="bg-black px-2 py-1 rounded-xl"
            >
                <h4>{payload[0]?.value}</h4>
            </div>
        )
    }
    return null;
}