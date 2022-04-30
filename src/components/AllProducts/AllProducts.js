import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './AllProducts.css'
const AllProducts = ({ counts }) => {
    console.log(counts);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <div>
            <h2>All Products</h2>
            <div className="row">
                {
                    products.map(product => <Product key={product.id} counts={counts} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default AllProducts;