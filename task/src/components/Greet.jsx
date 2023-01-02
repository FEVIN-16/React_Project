import React from 'react';

const Greet = (props) => {
    console.log(props);
    return (
        <div>
            <h1>Helli {props.name} {props.actor}</h1>
            {props.children}</div>)
}
export default Greet;