import React from 'react';
// import { Link } from 'react-router-dom'
// import './landing.css'
import Navbar from '../navbar'
import Sidebar from '../sidebar'

class ShoppingList extends React.Component {
    state = {}

    render() {
        return (
            <div className='page ShoppingList'>
                <Navbar />
                <Sidebar />
                <h1>Shopping List Page</h1>
            </div>
        )
    }
}

export default ShoppingList;