import React,{Component} from 'react';

class Counter extends Component{
    constructor(props){
        super(props);
        this.state={
            count:0,
            try2:[{tl:"Bqqqq"}],
            try1:[{tl:"hqqqq"}]
        }
    }
    increment=()=>{
        // this.setState({count:this.state.count+1},()=>{console.log(this.state.count)});
        this.setState((prevState)=>({
            count:prevState.count+1
        }))
    }
    incrementFive=()=>{
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }
    decrement=()=>{
        this.setState({try1:[{tl:"SSSSSS"}]});
    }
    multi=()=>{
        this.setState({try2:[this.state.try1,this.state.try2]},()=>console.log(this.state.try2))
    }
    render(){
        return (
            <div>
                <h1>count:{this.state.count};</h1>
                <h1>try:{this.state.try1[0].tl}</h1>
                <h1>try:{this.state.try2[0].tl}</h1>
                <button onClick={()=>this.increment()}>+</button>
                <button onClick={()=>this.decrement()}>-</button>
                <button onClick={()=>this.multi()}>*</button>
            </div>
        )
    }
}
export default Counter;