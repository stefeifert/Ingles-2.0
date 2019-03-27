import React from 'react';
// import { Link } from 'react-router-dom'
// import './landing.css'
import Navbar from '../navbar'
import Sidebar from '../sidebar'

class Products extends React.Component {
    state = {}

    render() {
        return (
            <div className='page products'>
                <Navbar />
                <Sidebar />
                <h1>Products Page</h1>
            </div>
        )
    }
}

export default Products;