import React from 'react'
import Day from './Day'
import styled from 'styled-components';

const DaysStyle = styled.div`
    margin: 1rem 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 0.7rem;
`;

const Days = () => {
    return(
        <DaysStyle>
            <Day />
            <Day />
            <Day />
            <Day />
            <Day />
        </DaysStyle>
    )
}

export default Days;