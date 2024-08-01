import React from 'react'
import User from './User.js'
import UserClass from './UserClass.js'
// const AboutUs =()=>{
//     return (
//         <div>
//             <h1>this is About Us page</h1>
//             <User></User>
//             <UserClass name={"Deep"} location={"delhi"}></UserClass>
//         </div>
//     )
// }
class AboutUs extends React.Component{
    constructor(){
        super()
        console.log("parent constrcut")
    }

    // componentDidCatch(){
    //     console.log("did catch child");
    // }
    render(){
        console.log("parente render")
        return(
            <div>
                <h1>this is About Us page</h1>
              {/* <User></User> */}
             <UserClass name={"Deep"} location={"delhi"}></UserClass>
            </div>
        )
    }
}
export default AboutUs