import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme/theme";
import Search from "./components/Search/Search";
import Toggle from "./components/Toggle/Toggle";
import WeatherToday from "./components/weatherToday/WeatherToday";
import Days from "./components/Days/Days";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather, weatherSelector } from "./app/slicer";

const BodyContainer = styled.div`
  background: ${({ theme }) => theme.body};
  /* height: 100vh; */
  /* min-height: 100vh;
  height: fit-content; */
  padding-bottom: 1rem;
`;
const Container = styled.div`
  background: ${({ theme }) => theme.body};
  width: 90%;
  margin: 2rem auto;
  padding: 1.2rem;
  border-radius: 15px;
  box-shadow: ${({ theme }) => theme.shadow};

  @media (max-width: 922px) {
    width: 80%;
  }
  @media (max-width: 422px) {
    width: 73%;
  }
`;

function App() {
  const getPrefColorScheme = () => {
    if (!window.matchMedia) return;

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  };

  const getInitialMode = () => {
    const isReturningUser = "dark" in localStorage;
    const savedMode = JSON.parse(localStorage.getItem("dark"));
    const userPrefersDark = getPrefColorScheme();
    // if mode was saved --> dark / light
    if (isReturningUser) {
      return savedMode;
      // if preferred color scheme is dark --> dark
    } else if (userPrefersDark) {
      return true;
      // otherwise --> light
    } else {
      return false;
    }
    // return savedMode || false;
  };

  const [darkMode, setDarkMode] = useState(getInitialMode());

  useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(darkMode));
  }, [darkMode]);

  const [didSearch, setDidSearch] = useState(false);
  const dispatch = useDispatch();
  const weather = useSelector(weatherSelector);

  // const weather = [
  //   {
  //     cod: "200",
  //     message: 0,
  //     cnt: 40,
  //     list: [
  //       {
  //         dt: 1594058400,
  //         main: {
  //           temp: 19.3,
  //           feels_like: 15.16,
  //           temp_min: 19.3,
  //           temp_max: 19.66,
  //           pressure: 1021,
  //           sea_level: 1021,
  //           grnd_level: 1018,
  //           humidity: 46,
  //           temp_kf: -0.36,
  //         },
  //         weather: [
  //           { id: 801, main: "Clouds", description: "few clouds", icon: "02d" },
  //         ],
  //         clouds: { all: 20 },
  //         wind: { speed: 5.04, deg: 317 },
  //         sys: { pod: "d" },
  //         dt_txt: "2020-07-06 12:00:00",
  //       },
  //       {
  //         dt: 1594123200,
  //         main: {
  //           temp: 19.03,
  //           feels_like: 15.42,
  //           temp_min: 19.03,
  //           temp_max: 19.03,
  //           pressure: 1020,
  //           sea_level: 1020,
  //           grnd_level: 1017,
  //           humidity: 45,
  //           temp_kf: 0,
  //         },
  //         weather: [
  //           {
  //             id: 803,
  //             main: "Clouds",
  //             description: "broken clouds",
  //             icon: "04d",
  //           },
  //         ],
  //         clouds: { all: 53 },
  //         wind: { speed: 4.1, deg: 254 },
  //         sys: { pod: "d" },
  //         dt_txt: "2020-07-07 12:00:00",
  //       },
  //       {
  //         dt: 1594209600,
  //         main: {
  //           temp: 20.58,
  //           feels_like: 19.43,
  //           temp_min: 20.58,
  //           temp_max: 20.58,
  //           pressure: 1017,
  //           sea_level: 1017,
  //           grnd_level: 1014,
  //           humidity: 57,
  //           temp_kf: 0,
  //         },
  //         weather: [
  //           { id: 500, main: "Rain", description: "light rain", icon: "10d" },
  //         ],
  //         clouds: { all: 97 },
  //         wind: { speed: 2.43, deg: 318 },
  //         rain: { "3h": 0.3 },
  //         sys: { pod: "d" },
  //         dt_txt: "2020-07-08 12:00:00",
  //       },
  //       {
  //         dt: 1594296000,
  //         main: {
  //           temp: 23.33,
  //           feels_like: 18.73,
  //           temp_min: 23.33,
  //           temp_max: 23.33,
  //           pressure: 1013,
  //           sea_level: 1013,
  //           grnd_level: 1010,
  //           humidity: 52,
  //           temp_kf: 0,
  //         },
  //         weather: [
  //           {
  //             id: 802,
  //             main: "Clouds",
  //             description: "scattered clouds",
  //             icon: "03d",
  //           },
  //         ],
  //         clouds: { all: 48 },
  //         wind: { speed: 7.86, deg: 225 },
  //         sys: { pod: "d" },
  //         dt_txt: "2020-07-09 12:00:00",
  //       },
  //       {
  //         dt: 1594382400,
  //         main: {
  //           temp: 19.51,
  //           feels_like: 15.24,
  //           temp_min: 19.51,
  //           temp_max: 19.51,
  //           pressure: 1023,
  //           sea_level: 1023,
  //           grnd_level: 1020,
  //           humidity: 41,
  //           temp_kf: 0,
  //         },
  //         weather: [
  //           {
  //             id: 802,
  //             main: "Clouds",
  //             description: "scattered clouds",
  //             icon: "03d",
  //           },
  //         ],
  //         clouds: { all: 33 },
  //         wind: { speed: 4.76, deg: 316 },
  //         sys: { pod: "d" },
  //         dt_txt: "2020-07-10 12:00:00",
  //       },
  //       {
  //         dt: 1594468800,
  //         main: {
  //           temp: 19.86,
  //           feels_like: 16.14,
  //           temp_min: 19.86,
  //           temp_max: 19.86,
  //           pressure: 1026,
  //           sea_level: 1026,
  //           grnd_level: 1023,
  //           humidity: 37,
  //           temp_kf: 0,
  //         },
  //         weather: [
  //           {
  //             id: 804,
  //             main: "Clouds",
  //             description: "overcast clouds",
  //             icon: "04d",
  //           },
  //         ],
  //         clouds: { all: 97 },
  //         wind: { speed: 3.64, deg: 336 },
  //         sys: { pod: "d" },
  //         dt_txt: "2020-07-11 12:00:00",
  //       },
  //     ],
  //     city: {
  //       id: 2643743,
  //       name: "London",
  //       coord: { lat: 51.5085, lon: -0.1257 },
  //       country: "GB",
  //       population: 1000000,
  //       timezone: 3600,
  //       sunrise: 1594007503,
  //       sunset: 1594066711,
  //     },
  //   },
  // ];

  const searchHandle = (value) => {
    // setDidSearch(true);
    // dispatch(fetchWeather(value));
  }
  useEffect(() => {
    if(!didSearch) dispatch(fetchWeather('london'));
    console.log('weather '+weather);
  }, [weather]);

  const handleToggleClick = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <>
        <div className="App">
          <BodyContainer>
            <Toggle handleToggleClick={handleToggleClick} />
            <Search searchHandle={searchHandle} />
            <Container>
              <WeatherToday dark={darkMode} weather={weather} />
            </Container>
            <Container>
              <Days />
            </Container>
          </BodyContainer>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
