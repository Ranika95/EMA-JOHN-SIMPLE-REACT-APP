import React from 'react';
import { useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { removeFromDb } from '../../utilities/fakedb';

const OrderReview = () => {
    const [products] = useProducts();
    const [cart, setCart] = useCart(products);
    const navigate = useNavigate();
    const handleRemove = key =>{
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        removeFromDb(key);
    }

    const handleProceedToShipping = () =>{
        //setCart([]);
        //clearTheCart();
        navigate('/shipping');
    }

    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    cart.map(product => <ReviewItem key={product.key} handleRemove={handleRemove}product={product}></ReviewItem>)

                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}>
                    <button onClick={handleProceedToShipping} className='btn-regular'>Proceed to Shipping
                    </button>
                </Cart>
            </div>
        </div>
    );
};

export default OrderReview;