import axios from 'axios';
import { FETCH_USER, FETCH_CARS } from './types';

export const fetchUser = () => async (dispatch) => {
   const res = await axios.get('/api/current_user');
   dispatch({ type: FETCH_USER, payload: res.data });
}

export const fetchCars = () => async (dispatch) => {
   const res = await axios.get('/api/cars');
   console.log(res)
   dispatch({ type: 'FETCH_CARS', payload: res.data })
}