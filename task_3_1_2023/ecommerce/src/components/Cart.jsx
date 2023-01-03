import React from 'react';
import Navigationbar from './Navigationbar';

const Cart=(props)=> {
        return (
            <>  
                {/* <Navigationbar/> */}
                <h1>Cart</h1>
                <table className='section1' style={{marginBottom:'30px'}}cellPadding="10px" cellSpacing="10px">
                <thead>
                    <tr>
                        <th className="grid-container">Name</th>
                        <th className="grid-container">Age</th>
                        <th className="grid-container">Gender</th>
                    </tr>
                </thead>
                <tbody>
                    {props.lists.map(list => {
                        return (
                            <tr key={list.name}>
                                <td>{list.name}</td>
                                <td>{list.price}</td>
                                <td>{list.type}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
                
            </>
        )
   
}
export default Cart;