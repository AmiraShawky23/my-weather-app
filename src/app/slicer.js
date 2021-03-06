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
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=6bc8fb3103e67c3661712ad7a233728a&units=metric`);
        const data = await response.json();
        
        dispatch(getWeatherSuccess(data));
      } catch (error) {
        dispatch(getWeatherFailure());
      }
    }
  }
