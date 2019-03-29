import React from 'react';
import Auth from '../../utils/Auth.js';
// import { Link } from 'react-router-dom'
// import './landing.css'
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
                {Auth.isLoggedIn() ? (
                <div>
                <img style = {{padding: 10, }}src={DawnCoupon} alt='DawnCoupon' width='650' />
                <img style = {{padding: 10 }}src={brushCoupon} alt='brushCoupon' width='650' />
                <img style = {{padding: 10, }}src={OreoCoupon} alt='OreoCoupon' width='650' />
                <img style = {{padding: 10 }}src={AmysCoupon} alt='AmysCoupon' width='650' />
                <img style = {{padding: 10, }}src={bananaCoupon} alt='bananaCoupon' width='650' />
                <img style = {{padding: 10}}src={dogFoodCoupon} alt='dogFoodCoupon' width='650' />
                </div>
              ) : (
                  <div>
                <img style = {{padding: 10}}src={OreoCoupon} alt='OreoCoupon' width='650' />
                <img style = {{padding: 10}}src={AmysCoupon} alt='AmysCoupon' width='650' />
                <img style = {{padding: 10}}src={bananaCoupon} alt='bananaCoupon' width='650' />
                <img style = {{padding: 10}}src={dogFoodCoupon} alt='dogFoodCoupon' width='650' />
                </div>
              )}
            </div>
        )
    }
}

export default Coupons;