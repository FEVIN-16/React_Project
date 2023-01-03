import React, { useState } from 'react';
import Navbar from './Navigationbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ProductList } from './ProductList';
import Cart from './Cart';



const Product = () => {
    const [data, setData] = useState([])
    const handleClick = (product) => {
        alert(`Name:${product.name}` + "\n" + `price:₹${product.price}` + "\n" + `Type:${product.type}`);
        setData(() => {
            let newProduct = [...data, product];
            console.log(newProduct);
            // new Cart(newProduct);
            return newProduct;
        });
    }
    return (
        <>
            <Navbar />
            <h1>Product Page</h1>
            <div style={{ 'display': 'flex', 'flexWrap': 'wrap', 'width': '90%', 'margin': 'auto' }}>
                {

                    ProductList.map(product => {
                        return (
                            <div key={product.name} className="card" style={{ 'margin': '10px', 'width': '211px' }}>
                                <img src={'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80'} className="card-img-top" alt="..." />
                                <div className="card-body NavColor">

                                    <h5 className="card-title">{product.name}</h5>
                                    <p className="card-text">{product.type}</p>
                                    <h5 className="card-title">₹{product.price}</h5>
                                    <button onClick={() => handleClick(product)} className="btn btn-warning ">Buy</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <Cart lists={data}/>
        </>
    )
}
export default Product;