import React,{Component} from 'react';
class Message extends Component{
    constructor(props){
        super(props);
        this.state={
            message:"welcom",
        }
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick=()=>{
        this.setState({
            message:"thankyou",
        });
    }
    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.handleClick()}>subscribe</button>
            </div>
        )
    }
}
export default Message;