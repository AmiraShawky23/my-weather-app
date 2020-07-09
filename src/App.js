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
  min-height: 97.7vh;
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
const Error = styled.div`
  width: 90%;
  margin: 7rem auto;
  height: 100%;
`
const H1 = styled.h1`
  text-transform: uppercase;
  font-size: 7rem;
  text-align: center;
  color: ${({theme}) => theme.text};
`

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
  let weather = useSelector(weatherSelector);

  const searchHandle = (value) => {
    setDidSearch(true);
    dispatch(fetchWeather(value));
    console.log(weather.weather.city.name)
  }
  useEffect(() => {
    if(!didSearch) dispatch(fetchWeather('london'));
  }, [ didSearch, dispatch]);

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
            {
              weather.weather.cod === '404' ? (
                <Error>
                  <H1>
                    no such city, try another city...
                  </H1>
                </Error>
              ) : (
                <>
                  <Container>
                    <WeatherToday dark={darkMode} weather={weather.weather} />
                  </Container>
                  <Container>
                    <Days list={weather.weather.list} />
                  </Container>
                </>
              )
            }
          </BodyContainer>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
