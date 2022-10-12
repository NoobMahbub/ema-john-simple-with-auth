import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import './Orders.css';
import ReviewItem from '../ReviewItem/ReviewItem';
import { Link, useNavigate } from 'react-router-dom';


const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);

    const handleRemoveProduct = (product) => {
        const rest = cart.filter(pd => pd.id !== product.id);
        setCart(rest);
          removeFromDb(product.id);
    }
   

    const navigate = useNavigate();

    return (
        <div className='shop-container'>
            <div className='review-items-container'>
            {
                cart.map(product => <ReviewItem
                key={product.id}
                product={product}
                handleRemoveProduct={handleRemoveProduct}
                ></ReviewItem>)
            }

            {/* Video 54-1 */}

            </div>
            <div className='cart-container'>
                <Cart cart={cart}>
              
                    <button onClick={()=>navigate('/inventory')}>Proceed Checkout</button>
                
                </Cart>
            </div>
        </div>
    );
};

export default Orders;