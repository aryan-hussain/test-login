import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  name: '',
  email: '',
  password: '',
  isSubmitting: false,
  isSuccess: false,
  isError: false,
  errorMessage: '',
};

const signupSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setSubmitting: (state, action) => {
      state.isSubmitting = action.payload;
    },
    setSuccess: (state, action) => {
      state.isSuccess = action.payload;
    },
    setError: (state, action) => {
      state.isError = action.payload;
    },
    setErrorMessage: (state, action) => {
      state.errorMessage = action.payload;
    },
    clearSignupData: (state) => {
      state.name = '';
      state.email = '';
      state.password = '';
      state.isSubmitting = false;
      state.isSuccess = false;
      state.isError = false;
      state.errorMessage = '';
    },
  },
});

export const {
  setName,
  setEmail,
  setPassword,
  setSubmitting,
  setSuccess,
  setError,
  setErrorMessage,
  clearSignupData,
} = signupSlice.actions;

export const submitSignupData = (name, email, password) => async (dispatch) => {
  dispatch(setSubmitting(true));
  try {
    const response = await axios.post('/api/signup', { name, email, password });
    if (response.status === 200) {
      const token = response.data.token;
      localStorage.setItem('token', token); // store token in local storage
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`; // set token as default header for all future requests
      dispatch(setSuccess(true));
      dispatch(setSubmitting(false));
      dispatch(clearSignupData());
    } else {
      dispatch(setError(true));
      dispatch(setErrorMessage(response.data.message));
      dispatch(setSubmitting(false));
    }
  } catch (error) {
    dispatch(setError(true));
    dispatch(setErrorMessage(error.message));
    dispatch(setSubmitting(false));
  }
};

export default signupSlice.reducer;