import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import {addToDb, getStoredCart} from '../../utilities/fakedb';
import './Shop.css'

const Shop = () => {
    const [products,setProducts] = useState([]);

    const [cart, setCart] = useState([]);

    useEffect( () =>{
        // console.log("product ApI called");
        fetch('./products.JSON')
        .then(res => res.json())
        .then(data => {
            setProducts(data)
            // console.log('Products received');
        });
    },[]);

    useEffect( ()=> {
        // console.log('LocalStorage cart Called');
        if(products.length){
            const savedCart = getStoredCart();
            const storedCart = [];
        for (const key in savedCart){
            const addedProduct = products.find( product => product.key === key);
            // console.log(key, addedProduct);
            if(addedProduct){
                const quantity = savedCart[key];
                addedProduct.quantity = quantity;
                storedCart.push(addedProduct);
            }
        }
        setCart(storedCart);
    }
    },[products])

    const handleAddToCart = (product) => {
        const newcart = [...cart,product];
        setCart(newcart);
        // save to local storage 
        addToDb(product.key);
    }

    return (
        <div className="shop-container">
            <div className="product-container">
                {/* <h3>Products:{products.length} </h3> */}
                {
                    products.map(product => <Product 
                        key={product.key}
                        product={product}
                        handleAddToCart = {handleAddToCart}
                        >
                        </Product>)
                }
            </div>
            <div className="cart-container">
               <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;