import { BsStarFill } from 'react-icons/bs';

export const tempStar= (stars) => Array.from({length:5},(_,index)=>{
    return(
        <span key={index} >
            {
                stars >=index+1?
                <BsStarFill className='text-yellow-400'/>:
                <BsStarFill className='text-white'/>
            }
        </span>
    )
});


//It helps to format the number
export const numberFormat = (number, isRevenue=false) => {
    let formattedNumber;
    if (isRevenue && number >= 1000) {
      formattedNumber = `$${(number / 1000).toFixed(1)}k`;
    } else {
      formattedNumber = Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(number);
    }
    
    return formattedNumber;
  };
  