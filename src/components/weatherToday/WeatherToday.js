import React from "react";
import styled from "styled-components";
import CloudSun from "../icons/CloudSun";
import Arrow from '../icons/Arrow';
import { ReactComponent as Icon } from "../../assets/images/map-marker-alt-solid.svg";

const WeatherTodayStyle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1.2rem;
  color: ${({theme}) => theme.text};
  margin-bottom: 1rem;
`;
const Weather = styled.div`
  display: flex;
  justify-content: space-between;
  width: fit-content;
    margin-left: 3rem;
    
    @media (max-width: 922px) {
        margin: auto;
    }
    @media (max-width: 422px) {
        flex-direction: column;
        text-align: center;
        margin: auto;
        margin-top: 2rem;
    }
`;
const H3 = styled.h3`
  color: ${({ theme }) => theme.text};
  margin-bottom: 0;

  svg {
    height: 1rem;
    margin-right: 1rem;
  }
`;
const CloudSunStyle = styled.div`
  display: flex;
  flex-direction: column;

  svg {
    width: 10rem;
    height: fit-content;
  }
`;
const H1 = styled.h1`
    font-weight: 500;
    font-size: 2.3rem;
`;
const P = styled.p`
    text-align: center;
    margin: 0;
    font-weight: 400;
`;
const Max = styled.div`
    align-items: center;
    display: flex;
`;
const Min = styled.div`
    display: flex;
    align-items: center;
    margin-left: 2rem;
    /* margin-top: 1rem; */

    svg {
        transform: rotateX(180deg);
    }
`;
const MinMax = styled.div`
    display: flex;
    justify-content: center;
    
    p {
        margin: 0;
        line-height: 17px;
        margin-left: 0.9rem;

        font-weight: 500;
    }
`;
const TempratureContainer = styled.div`
    margin-left: 3rem;
    @media (max-width: 422px) {
        margin: auto;
    }
`;
const All = styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width: 922px) {
        flex-direction: column;
    }
`;
const More = styled.div`
    margin-left: auto;
    margin-right: 13%;

    @media (max-width: 922px) {
        margin: 2.2rem 0 0 0;
        text-align: center;
    }
`;
const Item = styled.div`
`;
const H2 = styled.h2`
`;

const WeatherToday = (props) => {
    // console.log(props.weather[0].list[0] )
  return (
    <WeatherTodayStyle>
      <H3>
        <Icon />
        {/* {
            props.weather[0].city.name
        }
        / {
            props.weather[0].city.country
        } */}
      </H3>
      {/* {console.log(temp.current.weather[0].main)} */}
      <All>
        <Weather>
            <CloudSunStyle>
                <CloudSun />
                <P>
                    {
                        // props.weather[0]
                    }
                </P>
            </CloudSunStyle>
            <TempratureContainer>
            <H1>22.23 °C</H1>
            <MinMax>
                <Max>
                    <Arrow color={props.dark ? '#eff1f2' : '#09203f'}/>
                    <p>
                        {/* Max */}
                        27°C
                    </p>
                </Max>
                <Min>
                    <Arrow color={props.dark ? '#eff1f2' : '#09203f'}/>
                    <p>
                        {/* Min */}
                        12°C
                    </p>
                </Min>
            </MinMax>
            </TempratureContainer>
        </Weather>
        <More>
            <H2>
                Tuesday 11:00 PM
            </H2>
            <Item>
                Precipitation: 7%
            </Item>
            <Item>
                Humidity: 7%
            </Item>
            <Item>
                Wind: 7km/h
            </Item>
        </More>
      </All>
    </WeatherTodayStyle>
  );
};

export default WeatherToday;
