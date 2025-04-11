
import React from 'react';
import '../css/Navbar.css'; // Importing the CSS file for styling
import { useState } from 'react';
import { IoIosNotifications } from "react-icons/io";
// hhgjg
function NavBar() {
  
    const [profilePic, setProfilePic] = useState(null);

    const handlePhotoChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        setProfilePic(URL.createObjectURL(file));
      }
    };
  
    return (
      <nav className="navbar">
        <div className="logo"><a href="#">Travel<span>Ease</span></a></div>
        <div className="nav-links">
          <a href="#">Hotels</a>
          <a href="#">Cars</a>
          <a href="#">Rental</a>
        </div>
        <div className="right-section">
          <div className="bell">
            <span><IoIosNotifications /></span>
          </div>
          <div className="profile">
            <label htmlFor="profile-upload">
              <img
                src={profilePic || 'https://via.placeholder.com/40'}
                alt="profile"
                className="profile-pic"
              />
            </label>
            <input
              type="file"
              id="profile-upload"
              accept="image/*"
              onChange={handlePhotoChange}
              style={{ display: 'none' }}
            />
            <span className="username">User name</span>
          </div>
        </div>
      </nav>
    );
  };

export default NavBar;