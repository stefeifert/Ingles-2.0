import React from 'react';
// import { Link } from 'react-router-dom'
// import './landing.css'
import Navbar from '../navbar'
import Sidebar from '../sidebar'
import axios from 'axios'


class Products extends React.Component {
    state = {
        products: []
    }
componentDidMount(){
axios.get("/api/products")
.then(res => this.setState({
    products: res.data
}))


}



    render() {
        return (
            <div className='page products'>
                <Navbar />
                <Sidebar />
                <h1>Products Page</h1>
                {this.state.products.map(product => (
                    <p>{product.item}</p>
                ))}

            </div>
        )
    }
}

export default Products;