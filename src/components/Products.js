import React from 'react';
import './Products.css';
import MultiVitamin from '../assets/Category-Multivitamin.jpg';
import Protein from '../assets/Category-Protein__1_.jpg';
import Pregnancy from '../assets/Category-Pregnancy__1_.jpg';
import Bundles from '../assets/Category-Bundles.jpg';

const Products = () => {
    return (
        <div className="products">
            <div className="container">
                <img className="img" src={MultiVitamin} alt="vitamin" />
                <h2> Shop MultiVitamin</h2>
            </div>
            <div className="container">
                <img className="img" src={Protein} alt="protein" />
                <h2> Shop Protein </h2>
            </div>
            <div className="container">
                <img className="img" src={Pregnancy} alt="preg" />
                <h2> Shop Pregnancy </h2>
            </div>
            <div className="container">
                <img className="img" src={Bundles} alt="bund" />
                <h2> Shop Bundles </h2>
            </div>
        </div>
    )
}

export default Products
