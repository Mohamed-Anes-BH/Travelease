import React from 'react';
import RatingCars from '../components/RatingCars';

const RatingDemo = () => {
    const ratings = {
        overall: 4.5,
        performance: 4.8,
        fuel: 4.2,
        maintenance: 4.0,
        safety: 4.7,
        comfort: 4.3
    };

    return (
        <div style={{ 
            minHeight: '100vh', 
            display: 'flex', 
            alignItems: 'center', 
            backgroundColor: '#f3f4f6' 
        }}>
            <RatingCars ratings={ratings} />
        </div>
    );
};

export default RatingDemo; 