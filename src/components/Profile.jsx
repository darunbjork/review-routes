// src/components/Profile.js
import React, { useState } from 'react';
import "../App.css"

const Profile = () => {
  const [userDetails, setUserDetails] = useState({
    username: 'JohnDoe', // Example data
    email: 'johndoe@example.com',
    birthday: '1990-01-01',
  });
  const [editing, setEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setEditing(false);
    alert('Profile updated successfully!');
  };

  return (
    <div className='profile-container'>
      <h2>User Profile</h2>
      <div>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={userDetails.username}
            onChange={handleChange}
            disabled={!editing}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={userDetails.email}
            onChange={handleChange}
            disabled={!editing}
          />
        </label>
        <br />
        <label>
          Birthday:
          <input
            type="date"
            name="birthday"
            value={userDetails.birthday}
            onChange={handleChange}
            disabled={!editing}
          />
        </label>
        <br />
        {editing ? (
          <button onClick={handleSave}>Save</button>
        ) : (
          <button onClick={() => setEditing(true)}>Edit</button>
        )}
      </div>
    </div>
  );
};

export default Profile;
