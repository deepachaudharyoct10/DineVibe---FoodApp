import { useEffect, useState,useContext} from "react"
import { LOGO_URL } from "../utils/contents"
import {Link} from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"
import UserContext from "../utils/UserContext"
const Heading =()=>{
    const [btnName, setBtnName] =useState("Login")
  
    const {loggedInUser} = useContext(UserContext);
    useEffect(()=>{
        console.log("header rendered")
    })
    const onlineStatus = useOnlineStatus();
    
    return (
        <div className="flex justify-between bg-pink-300 shadow-lg m-2 sm:bg-pink-100">

            <div className="logo-wrapper">
                <img className="w-28" src={LOGO_URL} alt="logo"></img>
            </div>
            <div className="flex items-center ">
                <ul className="flex p-4 m-4">
                    <li className="px-2 font-bold">Online Status{onlineStatus ? "✅" : "🔴" }</li>
                    <li className="px-2 font-bold"><Link to="/">Home</Link></li>
                    <li className="px-2 font-bold"><Link to="/AboutUs">About Us</Link></li>
                    <li className="px-2 font-bold"><Link to="/ContactUs">Contact Us</Link></li>
                    <li className="px-2 font-bold"><Link to="/Grocery">Grocery</Link></li>
                    <li className="px-2 font-bold"><Link to="/cart">Cart</Link></li>
                    <button className="login font-bold" onClick={()=>{
                  
                        btnName == "Login" ? setBtnName("Logout") : setBtnName("Login");
                        console.log(btnName);
                    }} >{btnName}</button>
                  {/* <li>{loggedInUser}</li> */}
                </ul>
            </div>
        </div>
    )
}

export default Heading