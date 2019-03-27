import React from 'react';
import Auth from '../../utils/Auth.js';
// import { Link } from 'react-router-dom'
// import './landing.css'
import Navbar from '../navbar';
import Sidebar from '../sidebar';
import AmysCoupon from '../images/coupons/AmysCoupon.jpg';
import bananaCoupon from '../images/coupons/bananaCoupon.jpg';
import dogFoodCoupon from '../images/coupons/dogFoodCoupon.jpg'
import OreoCoupon from '../images/coupons/OreoCoupon.jpg';
import DawnCoupon from '../images/coupons/DawnCoupon.jpg';
import brushCoupon from '../images/coupons/brushCoupon.jpg';

class Coupons extends React.Component {
    state = {}

    render() {
        return (
            <div className='page Coupons'>
                <Navbar />
                <Sidebar />
                <h1>Coupons Page</h1>
                {Auth.isLoggedIn() ? (
                <div>
                  <img src={DawnCoupon} alt='DawnCoupon' width='650' />
                <img src={brushCoupon} alt='brushCoupon' width='650' />
                <img src={OreoCoupon} alt='OreoCoupon' width='650' />
                <img src={AmysCoupon} alt='AmysCoupon' width='650' />
                <img src={bananaCoupon} alt='bananaCoupon' width='650' />
                <img src={dogFoodCoupon} alt='dogFoodCoupon' width='650' />
                </div>
              ) : (
                  <div>
                <img src={OreoCoupon} alt='OreoCoupon' width='650' />
                <img src={AmysCoupon} alt='AmysCoupon' width='650' />
                <img src={bananaCoupon} alt='bananaCoupon' width='650' />
                <img src={dogFoodCoupon} alt='dogFoodCoupon' width='650' />
                </div>
              )}
            </div>
        )
    }
}

export default Coupons;