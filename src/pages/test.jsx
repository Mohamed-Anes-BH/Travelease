import React from 'react';

import Back from "../assets/image/background.png";
import phone from "../assets/image/hotel.png";
import lowla from "../assets/image/lowla.png";
import tania from "../assets/image/tania.png";
import thaltha from "../assets/image/thaltha.png";
import rab3a from "../assets/image/rab3a.png";
import NavBar from "./NavBar";
import vid from "../assets/lala.webm";

function Test() {
    


  return (
    <>
      <NavBar />
      <div className="flex flex-col items-center justify-center w-full bg-[#EAE2E2] font-sans z-[1] text-black">
        {/* First Part */}
        <div className="relative w-[110%]">
          <img 
            src={Back} 
            alt="background" 
            className="absolute top-0 left-0 w-full max-h-[821px] z-0" 
          />
          <div className="flex flex-col items-center justify-center w-full h-[60vh] relative overflow-hidden z-[1] text-[1.5rem] bg-transparent">
            <h1>Explore TravelEase For Your Stay</h1>
            <h3>Discover a variety of services during your Journey!</h3>
            <p>Join us now to discover Algeria like you never did.</p>
          </div>
          <img 
            src={phone} 
            alt="hotel" 
            className="relative w-[40%] ml-[40%] z-[1] -mt-[20%] animate-[taa_2s_ease-in-out_infinite_alternate]" 
          />
        </div>

        {/* Second Part */}
        <div className="flex flex-col justify-between items-center w-full mx-auto py-[40px] px-[20px] gap-[25px] font-[800] text-[1.25rem]">
          <p>Check our best selling</p>
          <video src={vid} autoPlay muted loop playsInline className="w-full"></video>
        </div>

        {/* About Section */}
        <div className="relative w-full max-w-[1200px] mx-auto py-[4rem] px-[2rem] bg-[#EAE2E2] text-center mt-[20%]">
          <h3 className="relative top-0 left-[5.5%] w-full max-w-[1000px] mb-[40px]">Why should you choose us?</h3>
          
          {/* Wide Selection */}
          <div className="flex justify-between items-center mb-[5rem] relative flex-row-reverse">
            <div className="w-[45%] text-center relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[4px] h-full bg-[#333]"></div>
              <h1 className="text-[2rem] mb-[1rem] text-black font-[800]">Wide Selection</h1>
              <p className="text-[1.25rem] font-[500] text-[#222]">Explore a vast range of hotels, apartments, and cars across Algeria.</p>
            </div>
            <div className="w-[45%] flex items-center justify-center">
              <img src={lowla} alt="" />
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 w-[16px] h-[16px] bg-crimson rounded-full z-[1]"></div>
          </div>

          {/* Secure Payments */}
          <div className="flex justify-between items-center mb-[5rem] relative">
            <div className="w-[45%] flex flex-col items-center justify-center text-left">
              <h1 className="text-[2rem] mb-[1rem] text-black font-[800]">Secure Payments</h1>
              <p className="text-[1.25rem] font-[500] text-[#222]">Your transactions are safe and secure with our trusted payment system.</p>
            </div>
            <div className="w-[45%]">
              <img src={tania} alt="" />
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 w-[16px] h-[16px] bg-crimson rounded-full z-[1]"></div>
          </div>

          {/* Easy Booking */}
          <div className="flex justify-between items-center mb-[5rem] relative flex-row-reverse">
            <div className="w-[45%] text-right">
              <h1 className="text-[2rem] mb-[1rem] text-black font-[800]">Easy Booking</h1>
              <p className="text-[1.25rem] font-[500] text-[#222]">Book in just a few clicks with our user-friendly platform.</p>
            </div>
            <div className="w-[45%]">
              <img src={thaltha} alt="" />
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 w-[16px] h-[16px] bg-crimson rounded-full z-[1]"></div>
          </div>

          {/* Best Prices */}
          <div className="flex justify-between items-center mb-[5rem] relative">
            <div className="w-[45%] text-right">
              <h1 className="text-[2rem] mb-[1rem] text-black font-[800]">Best Price</h1>
              <p className="text-[1.25rem] font-[500] text-[#222]">Enjoy the best deals and discounts on every booking.</p>
            </div>
            <div className="w-[45%]">
              <img src={rab3a} alt="" />
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 w-[16px] h-[16px] bg-crimson rounded-full z-[1]"></div>
          </div>
        </div>

        {/* Last Part */}
        <div className="flex justify-between items-start w-full mx-auto py-[40px] px-[20px] border-t border-[#474747] bg-[#D9D9D9]">
          <div className="flex-1 pr-[40px] flex flex-col">
            <h1 className="text-[32px] font-bold text-[#333] mb-[10px]">Travelease</h1>
            <p className="text-[16px] text-[#666] mt-0">You trusted travel company across Algeria</p>
          </div>
          <div className="flex flex-col w-1/5">
            <a className="text-[18px] font-bold text-[#333] mb-[15px] cursor-not-allowed no-underline">Assistance</a>
            <a className="text-[16px] text-[#666] mb-[8px] no-underline hover:scale-110">Helpdesk</a>
            <a className="text-[16px] text-[#666] mb-[8px] no-underline hover:scale-110">Support team</a>
            <a className="text-[16px] text-[#666] no-underline hover:scale-110">User manual</a>
          </div>
        </div>
      </div>

      {/* Add the custom animation to your Tailwind config */}
      <style jsx global>{`
        @keyframes taa {
          0% { transform: translateY(0); }
          100% { transform: translateY(-20px); }
        }
      `}</style>
    </>
  );

}
export default Test;