import { CDN_URL } from "../utils/contents";


const ResRent = (props)=>{
    console.log(props)
    const {objData}= props;
    console.log(objData);


    // ⭐
    return (
            <div className="m-4 p-4 w-[250px] shadow-lg rounded-md  hover:bg-gray-500 bg-gray-300" >
            <img className="rounded-lg" src={CDN_URL+objData.info.cloudinaryImageId} alt="logo"></img>
            <h3 className="font-bold py-4 text-l">{objData.info.name}</h3>
            <h4>{objData.info.id}</h4>
            <h4 className="">{objData.info.avgRating}⭐</h4>
            <h4>{objData.info.costForTwo}</h4>
           
            </div>
        )

}
    
export const WithPromoted = (ResRent)=>{
    return (props)=>{
        return (
            <div>
                <lable>Promoted</lable>
                <ResRent {...props}></ResRent>
            </div>
        )
    }
}

    export default ResRent