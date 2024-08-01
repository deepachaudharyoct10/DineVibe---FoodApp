import { useEffect, useState } from "react";
import { MENU_API } from "./contents";
const useRestaurantMenu =(resID)=>{

    const [resInfo, setResInfo] = useState(null);
    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async()=>{
        const data = await fetch(MENU_API + resID);
        const json = await data.json();
        setResInfo(json.data);
    }


    return resInfo;
}

export default useRestaurantMenu;