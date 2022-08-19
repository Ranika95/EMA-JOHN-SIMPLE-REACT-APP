import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { addToDb } from '../../utilities/fakedb';
import './Shop.css';
import useCart from '../../hooks/useCart';


const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useCart(products);
    //products to be rendered on the UI
    const [displayProducts,setDisplayProducts] = useState([]);

    useEffect(() => {
        fetch('/products.json')
        .then(res => res.json())
        .then(data => {setProducts(data);
            setDisplayProducts(data);
        });
    },[])
  
    const handleAddToCart = (product) => {
        const exists = cart.find(pd => pd.key === product.key);
        let newCart = [];
        if (exists) {
            const rest = cart.filter(pd => pd.key !== product.key);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, product];
            
        } else {
            product.quantity = 1;
            newCart = [...cart, product]; 
        }
        setCart(newCart);
        //save to local storage (for now)
        addToDb(product.key);
    }

    const handleSearch = event => {
        const searchText = event.target.value;
        const matchedProduct = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayProducts(matchedProduct);
    }

    return (
        <div>
            <div className='search-container'>
                <input type="text" onChange={handleSearch} placeholder='Search Product' />
            </div>
            <div className='shop-container'>
                <div className='product-container'>
                    <h3>Products: {products.length}</h3>
                    {
                        displayProducts.map(product => <Product 
                        key={product.key} product={product} handleAddToCart={handleAddToCart}>
                        </Product>)
                    }
                </div>
                <div className='cart-container'>
                    <Cart cart={cart}>
                        <Link to='/review'>
                            <button className='btn-regular'>Review your Order</button>
                        </Link>
                    </Cart>
                </div>
            
            </div>
        </div>
    );
};

export default Shop;