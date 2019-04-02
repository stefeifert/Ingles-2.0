import React from 'react';
import Auth from '../../utils/Auth.js';
import AmysCoupon from '../images/coupons/AmysCoupon.jpg';
import bananaCoupon from '../images/coupons/bananaCoupon.jpg';
import dogFoodCoupon from '../images/coupons/dogFoodCoupon.jpg'
import OreoCoupon from '../images/coupons/OreoCoupon.jpg';
import DawnCoupon from '../images/coupons/DawnCoupon.jpg';
import brushCoupon from '../images/coupons/brushCoupon.jpg';
import Container from 'react-bootstrap/Container'

class Coupons extends React.Component {
    state = {}

    render() {
        return (


            <Container>

                {Auth.isLoggedIn() ? (
                <div>
                <img style = {{padding: 10, }}src={DawnCoupon} alt='DawnCoupon' width='50%' />
                <img style = {{padding: 10 }}src={brushCoupon} alt='brushCoupon' width='50%' />
                <img style = {{padding: 10, }}src={OreoCoupon} alt='OreoCoupon' width='50%' />
                <img style = {{padding: 10 }}src={AmysCoupon} alt='AmysCoupon' width='50%' />
                <img style = {{padding: 10, }}src={bananaCoupon} alt='bananaCoupon' width='50%' />
                <img style = {{padding: 10}}src={dogFoodCoupon} alt='dogFoodCoupon' width='50%' />
                </div>
              ) : (
                  <div>
                <img style = {{padding: 10}}src={OreoCoupon} alt='OreoCoupon' width='50%' />
                <img style = {{padding: 10}}src={AmysCoupon} alt='AmysCoupon' width='50%' />
                <img style = {{padding: 10}}src={bananaCoupon} alt='bananaCoupon' width='50%' />
                <img style = {{padding: 10}}src={dogFoodCoupon} alt='dogFoodCoupon' width='50%' />
                </div>
              )}
            </Container>
        )
    }
}

export default Coupons;