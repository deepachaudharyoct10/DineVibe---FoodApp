import{ React ,lazy , Suspense, useEffect, useState}from "react"
import ReactDom from "react-dom/client"
import '../index.css'
import Heading from './components/Heading.js'
import Body from './components/Body.js'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import AboutUs from "./components/AboutUs.js"
import Error from "./components/Error.js"
import ContactUs from "./components/ContactUs.js"
import { Outlet } from "react-router-dom"
import RestaurantMenu from "./components/RestaurantMenu.js"
import { lazy } from "react"
import { useContext } from "react"
import UserContext from "./utils/UserContext.js"
// import Grocery from "./components/Grocery.js"

const Grocery = lazy(()=> import("./components/Grocery.js")); //dynamic importing
const AppLayout = ()=>{
    const [userName,setUserName]= useState();
    useEffect(()=>{
        const data = {
        name: "deepa",
        };
        setUserName(data.name)},[])
    return (
        <UserContext.Provider value={{loggedInUser : userName}}>
        <div className="App">
            <Heading></Heading>
            <Outlet></Outlet>
        </div>
        </UserContext.Provider>
    )
}
const appRouter =createBrowserRouter([
    {
        path:'/',
        element:<AppLayout></AppLayout>,
        errorElement: <Error></Error>,
        children:[
            {
                path:'/',
                element:<Body></Body>
            },
            {
                path:'/AboutUs',
                element:<AboutUs></AboutUs>
            }
            ,{
                path:'/ContactUs',
                element:<ContactUs></ContactUs>
            }
            , {
                path:'/Grocery',
                element:<Suspense fallback={<h1>Loading..........</h1>}><Grocery></Grocery></Suspense>
            }
            ,{
                path:'/RestaurantMenu/:resID',
                element:<RestaurantMenu></RestaurantMenu>
            }
        ]
    }
   
])
const root= ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}></RouterProvider>);