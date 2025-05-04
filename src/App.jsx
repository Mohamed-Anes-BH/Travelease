import React from "react";
import { Route, Routes} from "react-router-dom"; 
import Homepage from "./pages/Homepage";
import RatingComponent from "./components/Rating";


import LocationCardExample from "./components/LocationCardExample";
import Rating from "./components/Rating";

import HotelDetails from "./pages/HotelDetails";
import Calendar from "./components/Calendar";
import RatingDemo from './pages/RatingDemo';
import ReservationCard from './components/ReservationCard';
import Amenities from './components/Amenities';
import LocationCard from './components/LocationCard';

function App() {
    
    const sampleLocationData = {
        city: "Paris",
        mainAttraction: {
            name: "Eiffel Tower Area",
            description: "Located in the heart of Paris, this iconic landmark is surrounded by beautiful gardens and cafes."
        },
        verifiedListing: {
            details: "This location has been verified by our team",
            additionalInfo: "24/7 security and easy access to public transportation"
        },
        secondaryAttraction: {
            name: "Champ de Mars",
            description: "A beautiful public greenspace perfect for picnics and outdoor activities"
        },
        userComment: "Amazing location with stunning views of the city!",
        parkArea: {
            title: "Nearby Parks and Recreation",
            attractions: [
                {
                    name: "Trocadéro Gardens",
                    description: "Beautiful fountains and the best view of the Eiffel Tower"
                },
                {
                    name: "River Seine Walkway",
                    description: "Scenic riverside paths perfect for evening strolls"
                },
                {
                    name: "Luxembourg Gardens",
                    description: "Historic park with fountains and flower gardens"
                }
            ]
        }
    };

    return (
        <Routes>
            <Route path="/" element={<HotelDetails />} />
            
            
            <Route path="/hotel/:id" element={<HotelDetails />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/rating" element={<RatingDemo />} />
            <Route path="/reservation" element={<ReservationCard />} />
        </Routes>
    );
}

export default App;
