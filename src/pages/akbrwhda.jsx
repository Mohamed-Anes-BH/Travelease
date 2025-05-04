import React from "react";

function akbrwhda() {
    return (
        <img src={Back} alt="photo" id="back" />
        <div className="part1">
                <h1>Explore TravelEase For Your Stay</h1>
                <h3>Discover a variety of services during your Journey!</h3>
                <p>Join us now to discover Algeria like you never did.</p>
        </div>
        <img src={phone} alt="" id="phone" />
    )
    import React from "react";
import Back from "../assets/image/background.png";
import phone from "../assets/image/hotel.png";
import lowla from "../assets/image/lowla.png";
import tania from "../assets/image/tania.png";
import thaltha from "../assets/image/thaltha.png";
import rab3a from "../assets/image/rab3a.png";
import NavBar from "./NavBar";
import vid from "../assets/lala.webm";
import HotelCardRow from "../components/home_items/HotelCard";

function Homepage() {
    return (
        <div className="w-full max-w-full m-0 p-0 bg-[#EAE2E2]">
            <NavBar />
            <div className="relative w-full">
                <img src={Back} alt="background" className="relative top-0 left-0 w-full max-h-[821px] z-0 h-[80vh]"  />
                <div className="flex flex-col justify-center items-center w-full text-center h-[20vh] relative z-10">
                    <h1 className="text-4xl font-bold mb-4 ">Explore TravelEase For Your Stay</h1>
                    <h3 className="text-2xl mb-2">Discover a variety of services during your Journey!</h3>
                    <p className="text-lg">Join us now to discover Algeria like you never did.</p>
                </div>
                <img 
                    src={phone} 
                    alt="phone" 
                    className="w-[15%] h-[15%] relative top-0 ml-[45%] mb-[50px] z-10 animate-bounce " 
                />
            </div>

            <div className="flex flex-col justify-between items-center w-full mx-auto py-10 px-5 gap-6 font-extrabold text-xl">
                <p>Check our best selling</p>
                <video src={vid} autoPlay muted loop playsInline className="w-full"></video>
                <div className="flex flex-col justify-center items-center w-full max-w-[1500px] mx-auto py-16 px-8 bg-[#EAE2E2] text-center">
                    <HotelCardRow />
                    <HotelCardRow />
                    <HotelCardRow />
                </div>
            </div>

            <div className="mt-20 relative w-full max-w-[1200px] mx-auto py-16 px-8 bg-[#EAE2E2] text-center">
                <h3 className="relative top-0 left-[5.5%] w-full max-w-[1000px] mb-10">Why should you choose us?</h3>
                
                <div className="flex flex-row-reverse justify-between items-center mb-20 relative animate-slideIn">
                    <div className="w-1/2 flex flex-col items-center justify-center">
                        <h1 className="bg-crimson p-5 rounded-[15px] text-white text-base">Wide Selection</h1>
                        <p className="text-xl font-medium text-[#222] mt-4">Explore a vast range of hotels, apartments, and cars across Algeria.</p>
                    </div>
                    <div className="w-1/2">
                        <img src={lowla} alt="wide selection" />
                    </div>
                </div>

                <div className="flex justify-between items-center mb-20 relative animate-slideIn">
                    <div className="w-1/2 flex flex-col items-center justify-center">
                        <h1 className="bg-crimson p-5 rounded-[15px] text-white text-base">Secure Payments</h1>
                        <p className="text-xl font-medium text-[#222] mt-4">Your transactions are safe and secure with our trusted payment system.</p>
                    </div>
                    <div className="w-1/2">
                        <img src={tania} alt="secure payments" />
                    </div>
                </div>

                <div className="flex flex-row-reverse justify-between items-center mb-20 relative animate-slideIn">
                    <div className="w-1/2 flex flex-col items-center justify-center">
                        <h1 className="bg-crimson p-5 rounded-[15px] text-white text-base">Easy Booking</h1>
                        <p className="text-xl font-medium text-[#222] mt-4">Book in just a few clicks with our user-friendly platform.</p>
                    </div>
                    <div className="w-1/2">
                        <img src={thaltha} alt="easy booking" />
                    </div>
                </div>

                <div className="flex justify-between items-center mb-20 relative animate-slideIn">
                    <div className="w-1/2 flex flex-col items-center justify-center">
                        <h1 className="bg-crimson p-5 rounded-[15px] text-white text-base">Best Price</h1>
                        <p className="text-xl font-medium text-[#222] mt-4">Enjoy the best deals and discounts on every booking.</p>
                    </div>
                    <div className="w-1/2">
                        <img src={rab3a} alt="best price" />
                    </div>
                </div>
            </div>

            <div className="flex justify-between items-start w-full mx-auto overflow-x-hidden border-t border-[#474747] bg-[#D9D9D9]">
                <div className="flex-1 pr-10">
                    <h1 className="text-3xl font-bold text-[#333] mt-2.5 mb-2.5 ml-5">Travelease</h1>
                    <p className="text-base text-[#666] ml-5 mt-0">Your trusted travel company across Algeria</p>
                </div>
                <div className="flex-[0.2] flex flex-col">
                    <a href="#" className="text-lg font-bold text-[#333] cursor-not-allowed mb-4 no-underline mt-5">Assistance</a>
                    <a href="#" className="text-base text-[#666] mb-2 no-underline hover:scale-110 transition-transform">Helpdesk</a>
                    <a href="#" className="text-base text-[#666] mb-2 no-underline hover:scale-110 transition-transform">Support team</a>
                    <a href="#" className="text-base text-[#666] mb-[50px] no-underline hover:scale-110 transition-transform">User manual</a>
                </div>
            </div>
        </div>
    );
}

export default Homepage;
}

export default akbrwhda;