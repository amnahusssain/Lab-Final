// src/hooks/useDragons.js
import { useSelector, useDispatch } from 'react-redux';
import { /* import action creators */ } from '../reducers/dragonsSlice';

const useDragons = () => {
  const dragons = useSelector((state) => state.dragons);
  const dispatch = useDispatch();

  const /* your custom hook logic here */;

  return { /* values and functions to expose */ };
};

export default useDragons;
