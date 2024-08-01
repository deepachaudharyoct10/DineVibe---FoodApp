import React ,{useState} from 'react'
import ItemList from './ItemList';
 const RestaurantCategory = ({data ,showItem,setShowIndex}) => {
  // console.log(data);
  // const [showItem, setShowItem]= useState(false);
  const clickHandler = ()=>{
     setShowIndex();
  }
  return (
    <div>
      <div className='w-6/12 bg-gray-50 mx-auto my-4 p-4 shadow-xl'>
       <div  className=' flex justify-between'>
        <span className='font-bold'>{data.title} ({data.itemCards.length})</span>
        <span  onClick={clickHandler}>⬇️</span>
        </div>
        {showItem && <ItemList item ={data.itemCards}></ItemList>}
        
      </div>

    </div>
  )
}

export default RestaurantCategory