import { configureStore, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state.messages.push(action.payload);
    },
  },
});

export const { addMessage } = chatSlice.actions;

export const sendMessage = (message) => async (dispatch) => {
  dispatch(addMessage({ sender: 'user', text: message }));
  try {
    const response = await axios.post('http://127.0.0.1:8000/api/chat/', { message });
    dispatch(addMessage({ sender: 'bot', text: response.data.response }));
  } catch (error) {
    dispatch(addMessage({ sender: 'bot', text: 'Error connecting to the server.' }));
  }
};

const store = configureStore({
  reducer: {
    chat: chatSlice.reducer,
  },
});

export default store;
