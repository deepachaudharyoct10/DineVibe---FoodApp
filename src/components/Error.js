import { useRouteError } from "react-router-dom"
console.log(useRouteError)
const Error =()=>{
    let Err= useRouteError();
    console.log(Err)
    return (
        <div>
            <h1>{Err.status}</h1>
            <h1>{Err.statusText}</h1>
        </div>
    )
}
export default Error