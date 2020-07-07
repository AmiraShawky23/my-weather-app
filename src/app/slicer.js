import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  loading: false,
  hasErrors: false,
  weather: [],
}

const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
      getWeather: state => {
        state.loading = true
      },
      getWeatherSuccess: (state, { payload }) => {
        state.weather = payload
        state.loading = false
        state.hasErrors = false
      },
      getWeatherFailure: state => {
        state.loading = false
        state.hasErrors = true
      },
    },
  })
  export const { getWeather, getWeatherSuccess, getWeatherFailure } = weatherSlice.actions

  export const weatherSelector = state => state.weather

  export default weatherSlice.reducer
  
  export function fetchWeather(city) {
    return async dispatch => {
      dispatch(getWeather())
      try {
        const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=6acc0fc91b684ffbbaf233902200307&q=${city}&days=5`);
        const data = await response.json();

        dispatch(getWeatherSuccess(JSON.stringify(data)));
      } catch (error) {
        dispatch(getWeatherFailure());
      }
    }
  }
