// src/hooks/useUserProfile.js
import { useSelector } from 'react-redux';

const useUserProfile = () => {
  const user = useSelector((state) => state.user);

  return {
    user,
    loading: /* define loading logic based on your application state */,
    error: /* define error logic based on your application state */,
  };
};

export default useUserProfile;
