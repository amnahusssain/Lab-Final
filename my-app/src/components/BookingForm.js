import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bookDragon, cancelReservation } from '../reducers/dragonsSlice';

const BookingForm = () => {
  const [selectedDragon, setSelectedDragon] = useState('');
  const dispatch = useDispatch();
  const dragons = useSelector((state) => state.dragons.dragons);

  const handleBooking = () => {
    // Perform data validation if needed
    if (selectedDragon) {
      // Dispatch an action to book the dragon
      dispatch(bookDragon({ dragonId: selectedDragon }));
    }
  };

  const handleCancelReservation = () => {
    // Perform data validation if needed
    if (selectedDragon) {
      // Dispatch an action to cancel the reservation
      dispatch(cancelReservation({ dragonId: selectedDragon }));
    }
  };

  return (
    <div>
      <select onChange={(e) => setSelectedDragon(e.target.value)}>
        {/* Populate the dropdown with available dragons */}
        {dragons.map((dragon) => (
          <option key={dragon.id} value={dragon.id}>
            {dragon.name}
          </option>
        ))}
      </select>
      <button onClick={handleBooking}>Book Dragon</button>
      <button onClick={handleCancelReservation}>Cancel Reservation</button>
    </div>
  );
};

export default BookingForm;
