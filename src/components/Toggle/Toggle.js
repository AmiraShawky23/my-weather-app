import React from 'react'
import styled from 'styled-components'

const ToggleStyle =styled.div`
    display: flex;
    padding: 1.2rem;
    margin-bottom: 1.2rem;
    justify-content: flex-end;
`
const Input = styled.input`

    &[type=checkbox]{
        height: 0;
        width: 0;
        margin: 0;
        visibility: hidden;
    }
    &:checked + label {
        background: linear-gradient(315deg,#fff,#d7e1ec 74%);
    }
    &:checked + label:after {
        left: calc(100% - 4px);
        transform: translateX(-100%);
        background: linear-gradient(315deg,#051426,#0d2c58 74%);
    }
`
const Label = styled.label`
    cursor: pointer;
    width: 44px;
    height: 22px;
    display: block;
    border-radius: 34px;
    position: relative;
    background: linear-gradient(315deg,#051426,#0d2c58 74%);

    &:after {
        content: '';
        position: absolute;
        left: 4px;
        top: 3px;
        width: 16px;
        height: 16px;
        background: linear-gradient(145deg,#fdffff,#d4dbde);
        border-radius: 50%;
	    transition: 0.3s;
    }
    &:active:after {
        width: 20px;
    }
`

const Toggle = ({handleToggleClick}) => {
    return(
        <ToggleStyle>
            <Input 
                type="checkbox"
                id="switch"
                onClick={() => handleToggleClick()}
                />
            <Label htmlFor="switch" />
        </ToggleStyle>
    )
}

export default Toggle
