import React from "react";

import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import tra from "./image/tra.png"
import b from "./image/hotel.png"

import "../css/Home.css"; // Importing the CSS file for styling

function Homepa () {
    return (<>
        <div className="container">
           
            <div className="home-content">
                <div className="photo-tr">
                <div className="photo1">
                    <img src={b} alt="" />
                </div>
                 <div className="photo2">
                 <img src={tra} alt=""  />
                 </div>
                </div>
                 <div className="ktiba">
                    <h1>EXPLORE TravelEase FOR YOUR STAY</h1>
                    <h2>Discover a variety of services during your journey !</h2>
                    <p>Join us now to discover Algeria like you never did before</p>
                    <div className="home-input">
                    <input type="email"placeholder="email" />
                    </div>
                    <div className="home-input" >
                    <input type="password" placeholder="password" />
                </div>
                <pre>Why should you chose us?</pre>
                </div>
            </div>
            <div className="home2">

                <div className="wide-selection">
                  <h2>Wide selection</h2>
                  <p>
                    Explore a vast range of hotels, apartements, and cars across Algeria
                  </p>
                  <img src="" alt="" />
                </div>
                <div className="secure-payment">
                <img src="" alt="" />
                    <h2> Secure payement</h2>
                    <p>
                    Your transections re safe and secure with our trusted payement system
                    </p>
                </div>
                <div className="best-prices">
                  <h2> Best Prices</h2>
                  <p>
                    Enjoy the best deals and discounts on every booking 
                  </p>
                  <img src="" alt="" />
                </div>
                <div className="easy-booking">
                <img src="" alt="" />
                    <h2> Easy Booking</h2>
                    <p>
                    Book in just a few clicks with our user-freindly platform
                    </p>
                </div>
                <div className="paragra">
                    <p>Check our best selling </p>
                </div>

            </div>
            

            <div className="image-HAC">
            <FaArrowCircleLeft />

                <p>paragraph</p>
                <FaArrowCircleRight />
                <div className="cards_best">

                </div>

            </div>

            </div>
               
        
        </>
    );
}
export default Homepa; 