import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => async (dispatch) => {
   const res = await axios.get('/api/current_user');
   dispatch({ type: FETCH_USER, payload: res.data });
   return res.data;
}

export const login = () => async (dispatch) => {
   const res = await axios.get('/auth/google');
   console.log(res);
   dispatch({ type: 'LOGIN' })
}