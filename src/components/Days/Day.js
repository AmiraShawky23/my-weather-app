import React from 'react'
import styled from 'styled-components';
import CloudMoon from '../icons/CloudMoon';
import WeatherIcon from '../weatherToday/WeatherIcon';

const DayStyles = styled.div`
    min-width: 17%;
    text-align: center;
    display: flex;
    justify-content: center;
    box-shadow: ${({theme}) => theme.boxInnerShadow};
    border-radius: 15px;
    color: ${({theme}) => theme.text};
    flex-direction: column;
  
    svg {
        width: 7rem;
        height: fit-content;
        margin: auto;
    }
`;
const P = styled.p`
    text-align: center;
    margin-top: 0;
    font-weight: 400;
    padding: 0 1.3rem;
`;
const H4 = styled.h4`
    margin-bottom: 0;
    text-transform: uppercase;
`;

function getDayOfWeek(date) {
    const dayOfWeek = new Date(date).getDay();    
    return isNaN(dayOfWeek) ? null : 
      ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dayOfWeek];
}

const Day = (props) => {
    const temp = props.tempreture.dt_txt.split(" ");
    const itemDay = temp[0];

    return(
        <DayStyles>
            <H4>{getDayOfWeek(itemDay)}</H4>
            <WeatherIcon icon={props.tempreture.weather[0].icon}/>
            <P>{props.tempreture.main.temp} °C {props.tempreture.weather[0].description}</P>
        </DayStyles>
    )
}

export default Day;