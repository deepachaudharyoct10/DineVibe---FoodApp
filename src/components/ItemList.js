import React from 'react'
import { CDN_URL } from '../utils/contents';

 const ItemList = ({item}) => {
  console.log(item);
  return (
    <div>
      {item.map((items)=> 
      (<div key={items.card.info.id} className='m-2 p2 border-b-2 border-b-gray-500 flex justify-between text-left'>
        <div className='w-9/12'>
        <div className='flex flex-col py-2'>
        <span className='font-bold'>{items.card.info.name}</span>
          <span className='font-semibold'>₹ {items.card.info.price/100 || items.card.info.defaultPrice/100}</span>
        </div>
        <p className='text-sm'>{items.card.info.description}</p>
        </div>
        <div className='w-3/12 p-4'>
        <div><button className='p-2 bg-white rounded-lg absolute my-24 mx-12 text-green-700 font-extrabold cursor-pointer hover:bg-green-600 hover:text-white' >ADD+</button></div>
        <img src={CDN_URL+items.card.info.imageId} className='w-full h-32 rounded-md'></img>
       
        </div>
      </div>))}
    </div>
  )
}

export default ItemList;