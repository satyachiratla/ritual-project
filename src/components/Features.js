import React from 'react';
import './Features.css';
import First from '../assets/PDP_EFW_Bottle.jpg';
import Second from '../assets/PDP_EPRE_Bottle__1_.jpg';
import Third from '../assets/PDP-EP18-Bag.jpg';
import Four from '../assets/PDP_EFM_Bottle.jpg';

const Features = () => {
    return (
        <div>
            <div className="titles">
                <h1> Featured Products </h1>
                <a href> Shop All</a>
            </div>
            <div className="features">
                <div className="feature">
                    <img className="images" src={First} alt="" />
                    <div className="title"> Essential for women </div>
                    <div className="sub-title"> Multivitamin 18+ </div>
                    <h4 className="para"> The clinical-backed multivitamin, reimageined for women 18+ </h4>
                </div>
                <div className="feature">
                    <img className="images" src={Second} alt="" />
                    <div className="title"> Essential for women </div>
                    <div className="sub-title"> Multivitamin 18+ </div>
                    <h4 className="para"> The clinical-backed multivitamin, reimageined for women 18+ </h4>
                </div>
                <div className="feature">
                    <img className="images" src={Third} alt="" />
                    <div className="title"> Essential for women </div>
                    <div className="sub-title"> Multivitamin 18+ </div>
                    <h4 className="para"> The clinical-backed multivitamin, reimageined for women 18+ </h4>
                </div>
                <div className="feature">
                    <img className="images" src={Four} alt="" />
                    <div className="title"> Essential for women </div>
                    <div className="sub-title"> Multivitamin 18+ </div>
                    <h4 className="para"> The clinical-backed multivitamin, reimageined for women 18+ </h4>
                </div>
            </div>
        </div>
    )
}

export default Features
