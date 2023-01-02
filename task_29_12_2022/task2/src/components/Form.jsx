
import React,{Component} from 'react';

const Form=(props)=>{
        return(
            <div>
                <h1>Form</h1>
                <form onSubmit={props.handleSubmit}  >
                    <label>Name :</label><input type="text"style={{marginLeft:'7px'}} name="name" value={props.name} onChange={props.handleChange} placeholder='Name'/><br/>
                    <label>Age :</label><input type="text" style={{marginLeft:'22px',marginTop:'10px'}}name="age" value={props.age} onChange={props.handleChange} placeholder='Age'/><br/>
                    <label >Gender :</label><input type="text" style={{marginTop:'10px',marginBottom:'10px'}} name="gender" value={props.gender} onChange={props.handleChange} placeholder='Gender'/><br/>
                    <button type="submit" >submit</button>
                </form>
            </div>
        )
}
export default Form;
