import React from "react";
import styled from "styled-components";
import WeatherIcon from './WeatherIcon'
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
const Loading = styled.h1`
  font-size: 3rem;
  text-align: center;
  color: ${({theme}) => theme.text};
  margin: 1.2rem auto;
`;


function getDayOfWeek(date) {
    const dayOfWeek = new Date(date).getDay();    
    return isNaN(dayOfWeek) ? null : 
      ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dayOfWeek];
}

function tConvert (time) {
    // Check correct time format and split into components
    time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
  
    if (time.length > 1) { // If time format correct
      time = time.slice (1);  // Remove full string match value
      time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
      time[0] = +time[0] % 12 || 12; // Adjust hours
    }
    return time.join (''); // return adjusted time or original string
  }

const WeatherToday = (props) => {
    if(props.weather.list) {
        const temp = props.weather.list[0].dt_txt.split(" ");
        const itemDay = temp[0];
        const itemDate = tConvert(temp[1]);


        return (
            <WeatherTodayStyle>
            <H3>
                <Icon />
                {
                    props.weather.city.name
                }
            </H3>
            <All>
                <Weather>
                    <CloudSunStyle>
                        <WeatherIcon icon={props.weather.list[0].weather[0].icon} />
                        <P>
                            {
                                props.weather.list[0].weather[0].description
                            }
                        </P>
                    </CloudSunStyle>
                    <TempratureContainer>
                    <H1>
                        {
                            props.weather.list[0].main.temp
                        }
                        &nbsp; °C
                    </H1>
                    <MinMax>
                        <Max>
                            <Arrow color={props.dark ? '#eff1f2' : '#09203f'}/>
                            <p>
                                {
                                    props.weather.list[0].main.temp_max
                                }
                                &nbsp; °C
                            </p>
                        </Max>
                        <Min>
                            <Arrow color={props.dark ? '#eff1f2' : '#09203f'}/>
                            <p>
                                {
                                    props.weather.list[0].main.temp_min
                                }
                                &nbsp; °C
                            </p>
                        </Min>
                    </MinMax>
                    </TempratureContainer>
                </Weather>
                <More>
                    <H2>
                        {getDayOfWeek(itemDay)} {itemDate}
                    </H2>
                    <Item>
                        Humidity: {props.weather.list[0].main.humidity}%
                    </Item>
                    <Item>
                        Clouds: {props.weather.list[0].clouds.all}%
                    </Item>
                    <Item>
                        Wind: {props.weather.list[0].wind.speed}km/h
                    </Item>
                </More>
            </All>
            </WeatherTodayStyle>
        )
    }else {
        return(
            <Loading>
                loading...
            </Loading>
        )
    }
};

export default WeatherToday;
