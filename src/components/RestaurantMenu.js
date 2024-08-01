
import ShimmerUl from "./ShimmerUi.js"
import { useParams} from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu.js";

import RestaurantCategory from './RestaurantCategory.js'
import { useState } from "react";

const RestaurantMenu = ()=>{

    const {resID} = useParams();
    const resInfo = useRestaurantMenu(resID);
    const [showIndex,setShowIndex] = useState(null);

    if(resInfo===null) return <ShimmerUl></ShimmerUl>
    const {name,costForTwo,cuisines,avgRating} = resInfo?.cards[2]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;
   
    const category= resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((res) => res.card?.["card"]?.["@type"]=== "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    console.log("filster data" , category)
   
    return (
        <div >
          <div className="bg-orange-300 w-full rounded-full ">
          <div className="flex flex-col items-center">
            <h1 className="font-extrabold text-lg ">{name}</h1>
            <h2>{(cuisines).join(" ")} - {(costForTwo)/100} Rs</h2>
            <h2>{avgRating}❇️</h2>
            <h1 className="font-bold text-lg">Deal For You</h1>
            <h3>{resInfo?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers[0]?.info.header}</h3>
            <h4>{resInfo?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers[0]?.info.couponCode}</h4>
            <h3>{resInfo?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers[1]?.info.header}</h3>
            <h4>{resInfo?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers[1]?.info.couponCode}</h4>
            </div>
            <h1 className="font-bold text-lg text-center">Recommended</h1>
            </div>
            <div>
            <div>{category.map((categories,index) => (<RestaurantCategory key={categories.card?.card?.title}  data={categories.card?.card} showItem={index==showIndex?true :false}  setShowIndex={()=>setShowIndex(index)}></RestaurantCategory>))}</div>
      
            </div>
        </div>
    )
}

export default RestaurantMenu

// {item?.card?.info?.name}