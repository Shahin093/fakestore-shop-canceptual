import React from 'react';
import ReactMotal from '../ReactMotal/ReactMotal';

const Product = (props) => {
    const { id, image, title } = props.product;
    console.log(props.counts);
    return (
        <div className='col-md-4'>
            <div className="card p-3 border">
                <img className='w-50 mx-auto' src={image} alt="" />
                <h2>{title.slice(0, 10)}</h2>
                <div className='d-flex justify-content-around'>
                    <button onClick={props.counts} className='btn btn-success'>Add to Cart</button>
                    <button className='btn btn-danger'>Delete</button>
                    <ReactMotal id={id}></ReactMotal>
                </div>
            </div>

        </div>
    );
};

export default Product;