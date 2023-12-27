// src/components/Missions.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissions } from '../reducers/missionsSlice';
import useMissions from '../hooks/useMissions';

const Missions = () => {
  const { missions, loading, error } = useMissions();

  useEffect(() => {
    // Fetch missions when the component mounts
    missions.fetchMissions();
  }, [missions]);

  return (
    <div>
      <h2>Missions</h2>
      {loading && <p>Loading missions...</p>}
      {error && <p>Error fetching missions: {error}</p>}
      {missions && (
        <ul>
          {missions.map((mission) => (
            <li key={mission.id}>{mission.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Missions;
