import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from './slicer'

export default configureStore({
  reducer: {
    counter: weatherReducer,
  },
});
