import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ProductList } from './ProductList';
import Cart from './Cart';
import Navigationbar from './Navigationbar';

export const ProductContext = React.createContext();
const Product = () => {
    const [data, setData] = useState([]);

    const handleClick = (product) => {
        alert(`Name:${product.name}` + "\n" + `price:₹${product.price}` + "\n" + `Type:${product.type}`);
        setData(() => {
            let p1 = { name: product.name, price: product.price, type: product.type, quantity: 1 }
            let newProduct = [...data, p1];
            console.log(newProduct);
            return newProduct;
        });
    }
    const icrementQuant = (list) => {
        console.log(list.name + " " + list.type + " " + list.price);
        data.map((val) => {
            if (val.name === list.name) {
                val.quantity = val.quantity + 1;
            }
        })
        console.log(data);
        setData([...data]);
    }
    const decrementQuant = (list) => {
        console.log(list.name + " " + list.type + " " + list.price);
        data.map((val) => {
            if (val.name === list.name) {
                if (val.quantity > 1) {
                    val.quantity = val.quantity - 1;
                }
            }
        })
        console.log(data);
        setData([...data]);
    }
    const removeList = (list) => {
        console.log(list.name + " " + list.type + " " + list.price);
        console.log(data);
        setData(data.filter((val) => val.name !== list.name));
    }
    return (
        <>
            <Navigationbar />
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
            <ProductContext.Provider value={{ data, icrementQuant, decrementQuant, removeList }}>
                <Cart/>
            </ProductContext.Provider>

        </>
    )
}
export default Product;