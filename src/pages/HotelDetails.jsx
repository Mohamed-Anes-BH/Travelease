import React, { useState } from "react";
import NavBar from "./NavBar";
import Calendar from "../components/Calendar";
import Amenities from "../components/Amenities";
import ReservationCard from "../components/ReservationCard";
import RatingCars from "../components/RatingCars";
import Comments from "../components/Comments";
import { FaCoffee, FaMapMarkedAlt, FaUmbrellaBeach } from "react-icons/fa";
import "../css/hoteldetails.css";
import NavbarProf from "../components/NavbarProf";

// Dummy data for demonstration
const host = {
  name: "John Doe",
  profileUrl: "#",
  label: "Home",
  subtext: "Partner of new",
  avatar: "https://placehold.co/40x40",
};
const experiences = [
  { icon: <FaCoffee className="text-pink-700" />, text: "Free breakfast" },
  { icon: <FaMapMarkedAlt className="text-pink-700" />, text: "Guided city tour" },
  { icon: <FaUmbrellaBeach className="text-pink-700" />, text: "Private beach access" },
];
const features = [
  { icon: "🌅", label: "Beach view" },
  { icon: "🅿️", label: "Parking" },
  { icon: "🍳", label: "Kitchen" },
  { icon: "📶", label: "WiFi" },
  { icon: "🏊", label: "Pool" },
  { icon: "❄️", label: "Air conditioning" },
];
const ratings = {
  overall: 4.5,
  performance: 4.8,
  fuel: 4.2,
  maintenance: 4.0,
  safety: 4.7,
  comfort: 4.3
};
const reviews = [
  {
    user: "S1 mohamed",
    daysAgo: 2,
    text: "Amazing place! Will come again.",
  },
  {
    user: "S1 mohamed",
    daysAgo: 5,
    text: "Very clean and comfortable.",
  },
];
const months = ["July 2025", "August 2025"];
const calendar = [
  Array(31).fill(true),
  Array(31).fill(false).map((v, i) => (i % 2 === 0 ? true : false)),
];

export default function HotelDetails() {
  const [showAllEquip, setShowAllEquip] = useState(false);
  const [showAllReviews, setShowAllReviews] = useState(false);

  return (
    <div className="bg-[#f3eceb] min-h-screen font-sans px-[50px] py-[50px] ">
      {/* Header */}
      <NavbarProf />
      {/* Main Content */}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className=" zekzek max-w-6xl mx-auto px-8 sm:px-12 md:px-16 lg:px-20 py-12 flex-center flex-col lg:flex-row gap-12 items-center w-[90%] justify-center transform-x-5%">
        {/* Left: Main Info */}
        <div className="flex-1 min-w-0 flex flex-col gap-5 right-10 ">
          {/* Image Gallery */}
          <div className="mb-12 grid grid-cols-3 grid-rows-2 gap-6 h-[480px] w-full">
            <img
              src="https://placehold.co/600x400"
              alt="Main"
              className="row-span-2 col-span-1 w-full h-full object-cover rounded-2xl"
            />
            <img
              src="https://placehold.co/300x200"
              alt="1"
              className="col-span-1 row-span-1 w-full h-full object-cover rounded-2xl"
            />
            <img
              src="https://placehold.co/300x200"
              alt="2"
              className="col-span-1 row-span-1 w-full h-full object-cover rounded-2xl"
            />
            <img
              src="https://placehold.co/300x200"
              alt="3"
              className="col-span-1 row-span-1 w-full h-full object-cover rounded-2xl"
            />
            <img
              src="https://placehold.co/300x200"
              alt="4"
              className="col-span-1 row-span-1 w-full h-full object-cover rounded-2xl"
            />
          </div>

          {/* Reservation Card - now under images and sticky */}
         

          {/* Accommodation Name & Host */}
          <h1 className="text-4xl font-extrabold mb-4 lili">The hotel name</h1>
          <div className="flex items-center gap-3 text-lg text-gray-600 mb-6 lili">
            <span>⭐ 4.2</span>
            <span>·</span>
            <span>Review</span>
            <span>·</span>
            <span>Number of rev</span>
          </div>
          <div className="flex items-center gap-6 mb-8 justify-start left-5% lili">
            <img
              src={host.avatar}
              alt="Host"
              className="w-14 h-14 rounded-full border-2"
            />
            <div>
              <div className="text-base text-pink-700 font-semibold lili">
                {host.label}
                <span className="ml-2 text-gray-400">{host.subtext}</span>
              </div>
              <div className="font-bold text-lg lili">
                Hosted by{" "}
                <a
                  href={host.profileUrl}
                  className="text-pink-700 underline hover:text-pink-900"
                >
                  {host.name}
                </a>
              </div>
            </div>
          </div>

          {/* Experience Highlights */}
          <div className="mb-8 w-full lili">
            <h2 className=" font-bold text-2xl mb-3">Experience Highlights</h2>
            <ul className="list-none ml-0 text-lg text-gray-700">
              {experiences.map((exp, i) => (
                <li key={i} className="flex items-center gap-3 mb-[30px] p-[30px]">
                  {exp.icon}
                  <span>{exp.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full max-w-md mx-auto sticky top-8 z-10 mb-8 titi">
            <ReservationCard pricePerNight={150} />
          </div>

          {/* Features/Offers */}
          <div className="mb-8 w-full border-none lili ">
            <div className=" trtr rounded-2xl flex flex-col gap-3 w-full max-w-md p-[30px] border-none">
              <Amenities />
            </div>
          </div>

          {/* Availability Calendar */}
          <div className=" koko mb-12 w-full border-none">
            <h2 className=" tata font-bold text-2xl mb-3 ">Availability</h2>
            <div className=" krkr rounded-2xl p-6  w-full max-w-2xl">
              <Calendar />
            </div>
          </div>

          {/* Ratings Section */}
          <div className="mb-12 w-full liro">
            <RatingCars ratings={ratings} />
          </div>

          {/* Comments/Reviews */}
          <div className="mb-12 w-full ">
            <Comments
              reviews={reviews}
              showAll={showAllReviews}
              onToggleShowAll={() => setShowAllReviews((v) => !v)}
            />
          </div>

          {/* Location Information */}
          <div className="mb-12 w-full flex flex-col items-center lipo">
            <h2 className="font-bold text-2xl mb-3 text-center">Where will you be</h2>
            <div className="mb-3 text-gray-700 text-lg text-center kala">You will be here</div>
            <div className="w-full max-w-3xl h-96 bg-gray-100 rounded-2xl flex flex-col items-center justify-center p-6">
              <div className="w-full h-full bg-gray-200 rounded-xl flex items-center justify-center relative">
                <div className="absolute top-4 left-4 bg-white p-2 rounded-lg shadow-md">
                  <span className="text-gray-600">📍 Current Location</span>
                </div>
                <div className="text-gray-500 text-xl">Map Loading...</div>
                <div className="absolute bottom-4 right-4 bg-white p-2 rounded-lg shadow-md">
                  <span className="text-gray-600">Zoom: 100%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="laaa">
                <div className="gauu">
                        <h1>Travelease</h1>
                        <p>Your trusted travel company across Algeria</p>
                </div>
                <div className="droii">
                        <a href="#">Assistance</a>
                    <a href="#">Helpdesk</a>
                    <a href="#">Support team</a>
                        <a href="#">User manual</a>
                    </div>
                </div>
    </div>
  );
}