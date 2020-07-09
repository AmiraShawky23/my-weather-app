import React from 'react'
import Day from './Day'
import styled from 'styled-components';

const DaysStyle = styled.div`
    margin: 1rem 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 0.7rem;
`;

const Days = (props) => {
    if(props.list) {
        /*
        get first element date then
            filter list by date
        */
       const temp = props.list[0].dt_txt.split(" ");
       const firstItemDate = temp[1];

       const res = props.list.filter(item => {
           const temp1 = item.dt_txt.split(" ");
           const date = temp1[1];

           return date === firstItemDate;
        });

    /*
        map 3la list and send list item
    */
        return(
            <DaysStyle>
                {
                    res.map(item => {
                        return(
                            <Day key={item.dt} tempreture={item}/>
                        )
                    })
                }
            </DaysStyle>
        )
    }else {
        return(
            <div></div>
        )
    }
}

export default Days;