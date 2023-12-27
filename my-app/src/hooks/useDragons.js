import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDragons } from '../reducers/dragonsSlice';
import BookingForm from './BookingForm';

const Dragons = () => {
  const dispatch = useDispatch();
  const { dragons, status, error } = useSelector((state) => state.dragons);

  useEffect(() => {
    // Dispatch the fetchDragons thunk when the component mounts
    dispatch(fetchDragons());
  }, [dispatch]);

  // Handle loading and error states based on the 'status' and 'error' variables

  return (
    <div>
      <h2>Dragons</h2>
      {/* Display dragons data with reservation status */}
      {dragons.map((dragon) => (
        <div key={dragon.id}>
          <p>{dragon.name}</p>
          <p>Status: {dragon.status}</p>
          <p>Reserved: {dragon.reserved ? 'Yes' : 'No'}</p>
        </div>
      ))}

      {/* Integrate the BookingForm component */}
      <BookingForm />
    </div>
  );
};

export default Dragons;
