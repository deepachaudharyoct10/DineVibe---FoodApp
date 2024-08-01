import React from 'react'
class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            name:"hello",
            count1:1,
        }
console.log("chile constructor")
    }
   
    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/deepachaudharyoct10");
        const json = await data.json();
        console.log(json);
        console.log("why")
    }
    render(){
        console.log("child render")
        const {name}= this.props;
        const {count,count1}= this.state
        return (
            <div>
                {/* <h1>count: {count}</h1>
                <button onClick={()=>{
                    this.setState(
                        {
                            count: this.state.count+1,
                        }
                    )
                }}>Increase the value by one</button>
                <h1>count1:{count1}</h1>

<h1>{name}</h1>
<h2>{location}</h2> */}
<h1>{name}</h1>
            </div>
        )
    }
}
export default UserClass