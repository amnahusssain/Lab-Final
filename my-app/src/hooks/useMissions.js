// src/hooks/useMissions.js
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissions } from '../reducers/missionsSlice';

const useMissions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions);

  const fetchMissionsHandler = () => {
    dispatch(fetchMissions());
  };

  return {
    missions,
    loading: missions.status === 'loading',
    error: missions.error,
    fetchMissions: fetchMissionsHandler,
  };
};

export default useMissions;
