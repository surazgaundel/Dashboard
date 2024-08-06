import React from 'react'

import {feedbacks} from '../../utils/feedback';
import {imageArray} from '../../utils/imageArray';
import { tempStar } from '../../utils/helper';

export default function Feedback() {

  return (
    <div className='p-2 bg-dark rounded-xl'>
      <h1 className='ml-2 mb-3 text-2xl font-semibold'>Customer&apos;s Feedback</h1>
      <div className='h-[61vh] px-3 py-1 overflow-y-auto mx-auto mt-3 flex flex-col gap-4'>
      {
        feedbacks.map((feedback,index)=>{
          const {id, name, review, rating} =feedback;
          const imageSrc = imageArray[index % imageArray.length]?.src;

          return(
            <section key={id} className='flex flex-col gap-2'>
              <section className='flex items-center gap-2'>
                <img src={imageSrc} alt={name} className='w-10 h-10 rounded-full object-cover'/>
                <p className='font-semibold'>{name}</p>
              </section>
              <span className='flex gap-1 '>{tempStar(rating)}</span>
              <p className='text-sm text-[#999AA0] tracking-wide'>{review}</p>
              <hr className='mt-4 mb-1 bg-lightGray'/>
            </section>
          )
        })
      }
      </div>
    </div>
  )
}
