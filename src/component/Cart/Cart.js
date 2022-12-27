import React from 'react';
import {Link} from "react-router-dom"
import "./Cart.css"
const Cart = ({ cartItem, addToCart, decreseQty }) => {
    const totalPrice=cartItem.reduce((price,item)=>price+item.qty*item.price,0)
    console.log(cartItem)
    return (
        <div className='cart-items'>
            <div className="container d_flex">
                <div className="cart-details">
                    {cartItem.length === 0 && <h1 className='no-items product'>Giỏ hàng đang trống</h1>}
                    
                    {cartItem.map((item) => {
                        const productQty = item.price * item.qty
                        return (
                            <div className='cart-list product d_flex'>
                                <div className="img">
                                    <img src={item.cover} alt="" />
                                </div>
                                <div className='cart-details'>
                                    <h3>{item.name}</h3>
                                    <h4>
                                        {item.price}.00*{item.qty}
                                        <span>${productQty}.00</span>
                                    </h4>
                                </div>
                                <div className="cart-item-function">
                                    <div className="removeCart">
                                        <button className="removeCart">
                                            <i className='fas fa-times close home-bth'></i>
                                        </button>
                                    </div>

                                    <div className='cartControl d_flex'>
                                        <button className='inCart' onClick={() => addToCart(item)}>
                                            <i className='fa fa-plus'></i>
                                        </button>
                                        <button className='desCard' onClick={() => decreseQty(item)}>
                                            <i className='fa fa-minus'></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    
                </div>
                <div className="cart-total-product">
                    <h2>Cart Summary</h2>
                    <div className="d_flex">
                        <h4>Tổng giá trị:</h4>
                        <h3>${totalPrice}.00</h3>
                    </div>
                    <Link to='/cash'>
                        <button className='thanhtoan'>Thanh toán</button>
                    </Link>
                </div>
           </div> 
        </div>
    );
};

export default Cart;