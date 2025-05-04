import React, { useState } from 'react';
import '../css/HotelDetails.css';

const HotelDetails = () => {
  const [showAllEquipments, setShowAllEquipments] = useState(false);
  const [selectedGuests, setSelectedGuests] = useState(1);
  const [showGuestsDropdown, setShowGuestsDropdown] = useState(false);

  const features = [
    { icon: "☀️", text: "a beach view" },
    { icon: "🔑", text: "Self check-in" },
    { icon: "P", text: "Free parking" },
    { icon: "🚗", text: "Car rental available" },
    { icon: "👨‍🍳", text: "Kitchen" }
  ];

  const ratings = [
    { title: "overall rating", score: 4.2 },
    { title: "Cleanliness", score: 4.2 },
    { title: "Check in", score: 4.2 },
    { title: "Food", score: 4.2 },
    { title: "Location", score: 4.2 },
    { title: "Value", score: 4.2 }
  ];

  const generateCalendar = (month, year) => {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const days = [];
    
    // Add empty spaces for days before the first day of the month
    for (let i = 0; i < firstDay.getDay(); i++) {
      days.push(null);
    }
    
    // Add the days of the month
    for (let i = 1; i <= lastDay.getDate(); i++) {
      days.push(new Date(year, month, i));
    }
    
    return days;
  };

  const julyDays = generateCalendar(6, 2025); // July is month 6 (0-based)
  const augustDays = generateCalendar(7, 2025);

  const renderCalendarMonth = (days, monthName) => (
    <div className="month">
      <div className="weekdays">
        {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
          <div key={day} className="weekday">{day}</div>
        ))}
      </div>
      <div className="days">
        {days.map((date, index) => {
          if (!date) return <div key={`empty-${index}`} className="day empty" />;
          const isDisabled = date < new Date();
          const isSelected = [14, 21].includes(date.getDate()) && date.getMonth() === 6;
          
          return (
            <div 
              key={index}
              className={`day ${isDisabled ? 'disabled' : ''} ${isSelected ? 'selected' : ''}`}
            >
              {date.getDate()}
            </div>
          );
        })}
      </div>
    </div>
  );

  const BookingCard = () => (
    <div className="booking-card">
      <div className="price">
        <span className="amount">XXX $</span>
        <span className="night">/ night</span>
      </div>
      <div className="booking-form">
        <div className="dates">
          <div className="check-in">
            <label>Check in</label>
            <div className="date-input">M/D/YY</div>
          </div>
          <div className="check-out">
            <label>Check out</label>
            <div className="date-input">M/D/YY</div>
          </div>
        </div>
        <div className="guests-selector">
          <label>Guests</label>
          <div 
            className="guests-dropdown"
            onClick={() => setShowGuestsDropdown(!showGuestsDropdown)}
          >
            <span>Currently there is {selectedGuests} guest</span>
            <span className={`arrow ${showGuestsDropdown ? 'up' : ''}`}>▼</span>
          </div>
        </div>
        <button className="reserve">Reserve</button>
      </div>
    </div>
  );

  return (
    <div className="hotel-details-container">
      <nav className="navbar">
        <div className="nav-content">
          <div className="logo">TravelEase</div>
          <div className="nav-links">
            <a href="#hotels">Hotels</a>
            <a href="#cars">Cars</a>
            <a href="#rental">Rental</a>
          </div>
          <div className="auth-buttons">
            <button className="sign-up">Sign up</button>
            <button className="log-in">Log in</button>
          </div>
        </div>
      </nav>

      <main className="main-content">
        <div className="image-gallery">
          <div className="main-image"></div>
          <div className="side-images">
            <div className="side-image"></div>
            <div className="side-image"></div>
            <div className="side-image"></div>
            <div className="side-image"></div>
          </div>
        </div>

        <div className="hotel-info">
          <div className="content-section">
            <div className="hotel-header">
              <h1>The hotel name</h1>
              <div className="rating">
                <span className="star">★</span>
                <span>Review</span>
                <span>Number of rev</span>
              </div>

              <div className="host-info">
                <img src="/path-to-host-image" alt="Host" className="host-avatar" />
                <div>
                  <h3>Hosted by .... (name)</h3>
                  <p>Day this user started hosting</p>
                </div>
              </div>

              <div className="random-experiences">
                <div className="experience-icons">
                  <span>☀️</span>
                  <span>P</span>
                  <span>🗓️</span>
                </div>
                <p>3 random experiences that this place offer</p>
              </div>

              <div className="description">
                <p>dsdsdasddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddsadsadasdddddddddddddddddsadsaadsdasdasdsadsadas.</p>
              </div>
            </div>

            <section className="what-offers">
              <h2>what this place offers</h2>
              <div className="features-grid">
                {features.map((feature, index) => (
                  <div key={index} className="feature">
                    <span className="feature-icon">{feature.icon}</span>
                    <span>{feature.text}</span>
                  </div>
                ))}
              </div>
              <button 
                className="show-all" 
                onClick={() => setShowAllEquipments(!showAllEquipments)}
              >
                Show all the equipments
                <span className={`arrow ${showAllEquipments ? 'up' : ''}`}>▼</span>
              </button>
            </section>

            <section className="availability">
              <h2>Availability</h2>
              <div className="calendar">
                <div className="calendar-header">
                  <button className="nav-button">←</button>
                  <div className="months-header">
                    <span>July 2025</span>
                    <span>August 2025</span>
                  </div>
                  <button className="nav-button">→</button>
                </div>
                <div className="calendar-grid">
                  {renderCalendarMonth(julyDays, 'July')}
                  {renderCalendarMonth(augustDays, 'August')}
                </div>
              </div>
            </section>

            <section className="ratings-section">
              {ratings.map((rating, index) => (
                <div key={index} className="rating-item">
                  <h3>{rating.title}</h3>
                  <div className="rating-score">{rating.score}</div>
                  <div className="rating-bar">
                    <div 
                      className="rating-progress" 
                      style={{ width: `${(rating.score / 5) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </section>

            <section className="location-section">
              <h2>Where will you be</h2>
              <p>You will be here in guelma</p>
              <div className="map-container">
                <iframe
                  title="Hotel Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102329.58865853147!2d7.380000000000001!3d36.46666670000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12f05c1f2e59449f%3A0x5f234c6b3e7fef94!2sGuelma%2C%20Algeria!5e0!3m2!1sen!2sus!4v1710612898387!5m2!1sen!2sus"
                  width="100%"
                  height="450"
                  style={{ border: 0, borderRadius: '12px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <div className="map-controls">
                  <button className="map-control">⟲</button>
                  <button className="map-control">+</button>
                  <button className="map-control">-</button>
                  <button className="map-control">👤</button>
                </div>
              </div>
            </section>
          </div>

          <div className="sidebar">
            <BookingCard />
          </div>
        </div>
      </main>
    </div>
  );
};

export default HotelDetails; 