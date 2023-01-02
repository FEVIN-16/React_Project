import React, { Component } from 'react';

const Form=(props)=>{
    return (
      <div id="Form">
        <h3>Add a new item to the table:</h3>  
        <form onSubmit={props.handleSubmit}>
            <input type="text" name="name" value={props.name} onChange={props.handleChange} placeholder="Name" />
            <input type="text" name="price" value={props.price} onChange={props.handleChange} placeholder="Age" />
            <input type="text" name="type" value={props.type} onChange={props.handleChange} placeholder="Place" />
            <button type="submit">sub</button>
        </form>
      </div>
    );
 
}

export default Form;