import React from 'react';
// import { Link } from 'react-router-dom'
// import './landing.css'
import Navbar from '../navbar';
import Sidebar from '../sidebar';
import AmysCoupon from '../images/coupons/AmysCoupon.jpg';
import bananaCoupon from '../images/coupons/bananaCoupon.jpg';
import coffeeCoupon from '../images/coupons/coffeeCoupon.jpg';
import dogFoodCoupon from '../images/coupons/dogFoodCoupon.jpg'
import OreoCoupon from '../images/coupons/OreoCoupon.jpg';

class Coupons extends React.Component {
    state = {}

    render() {
        return (
            <div className='page Coupons'>
                <Navbar />
                <Sidebar />
                <h1>Coupons Page</h1>
                <ul>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/login'>Login Here</a></li>
                    <li><a href='products'>Product List</a></li>
                    <li><a href='coupons'>Coupons</a></li>
                    <li><a href='shopping-list'>Saved Shopping List</a></li>
                    <li><a href='about-us'>About Us</a></li>
                </ul>
                <img src={OreoCoupon} alt='OreoCoupon' width='650' />
                <img src={AmysCoupon} alt='AmysCoupon' width='650' />
                <img src={bananaCoupon} alt='bananaCoupon' width='650' />
                <img src={coffeeCoupon} alt='coffeeCoupon' width='650' />
                <img src={dogFoodCoupon} alt='dogFoodCoupon' width='650' />
            </div>
        )
    }
}

export default Coupons;