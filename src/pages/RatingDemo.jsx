import React, { useState } from 'react';
import Rating from '../components/Rating';

const RatingDemo = () => {
    const [ratings] = useState({
        overall: 4.2,
        cleanliness: 4.2,
        'check in': 4.2,
        food: 4.2,
        location: 4.2,
        value: 4.2
    });

    return (
        <div style={{ 
            minHeight: '100vh', 
            display: 'flex', 
            alignItems: 'center', 
            backgroundColor: '#f3f4f6' 
        }}>
            <Rating ratings={ratings} />
        </div>
    );
};

export default RatingDemo; 