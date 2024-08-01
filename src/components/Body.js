
import ResRent ,{WithPromoted} from './ResRent.js'
import { useEffect, useState } from 'react';
import ShimmerUi from './ShimmerUi.js';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus.js';
// import Shimmer from './Shimmer.js';
const Body= ()=>{
    const [objData, setObjData]= useState([]);
    const [searchText, setSearchText] = useState("");
    const [newobjData, setNewobjData] = useState([]);
    const onlineStatus= useOnlineStatus();
   useEffect(()=>
    {fetchData();

    },[]);

   const fetchData = async()=> {
    const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.3704165&lng=77.3220128&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const response = await data.json();
    // setObjData(response)
    setObjData(response.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setNewobjData(response.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

    console.log(response.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
   }

    const PromotedRest= WithPromoted()
   if(objData.length ===0){
    return <ShimmerUi></ShimmerUi>
   }
   if(onlineStatus === false){
    return <h1> You are offine . Please check your internet connectivity</h1>
   }
    return (
        <div>
           <div className='flex '>
       <div className='search m-4 p-4'>
        <input type='text' value={searchText} onChange={(e)=>{
        setSearchText(e.target.value);
    }} className='border border-solid'></input>
    <button className="px-4 py-1 bg-green-600 rounded-sm m-4" onClick={()=>{
        // setSearchText(searchText)
        // console.log(searchText)
         const serachData=objData.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()))
         setNewobjData(serachData)
        
    }} >Search</button>
       </div>
    
                <div className='search m-4 p-4 flex items-center'>
                <button className='px-4 bg-green-600 py-1 rounded-sm' onClick={()=>{
                  const newData= objData.filter((res)=>res.info.avgRating> 4)
                   setNewobjData(newData);
                }}>Top Rated Restaurent</button>
          </div>
            </div>
            <div className="flex flex-wrap">
              {
                newobjData.map((rest)=>(
                    <Link  key={rest.info.id} to={"/RestaurantMenu/"+rest.info.id} className='Card-Deco'>{rest.info.promoted ? <PromotedRest objData={rest}></PromotedRest> : <ResRent objData={rest}></ResRent>}</Link>)
                    )}
            </div>
        </div>
    )
}
export default Body;