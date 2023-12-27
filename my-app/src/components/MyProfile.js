// src/components/MyProfile.js
import React from 'react';
import useUserProfile from '../hooks/useUserProfile';

const MyProfile = () => {
  const { user, loading, error } = useUserProfile();

  return (
    <div>
      <h2>My Profile</h2>
      {loading && <p>Loading profile...</p>}
      {error && <p>Error fetching profile: {error}</p>}
      {user && (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          {/* Add more profile information as needed */}
        </div>
      )}
    </div>
  );
};

export default MyProfile;
