import React from 'react';
import Navbar from '../navbar'
import Sidebar from '../sidebar'

const StoreLocator = props => {
    return (
        <div>
            <Navbar />
            <Sidebar />
            <h1>Store Locator</h1>
        </div>
    )
};

export default StoreLocator;