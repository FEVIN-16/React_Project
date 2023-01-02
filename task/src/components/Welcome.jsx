import React,{Component} from 'react';

class Welcome extends Component{
    render(){
        return(
            <div>
                <h1>class component {this.props.name} {this.props.actor}</h1>
            </div>
            
        )
    }
}
export default Welcome;