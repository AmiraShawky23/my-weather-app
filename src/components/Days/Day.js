import React from 'react'
import styled from 'styled-components';
import CloudMoon from '../icons/CloudMoon';

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


const Day = () => {
    return(
        <DayStyles>
            <H4>Sunday</H4>
            <CloudMoon />
            <P>22°C sunny cloudy</P>
        </DayStyles>
    )
}

export default Day;