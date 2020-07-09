import React, { useState } from 'react'
import styled from 'styled-components';
import {ReactComponent as Icon} from '../../assets/images/search.svg'

const SearchStyle = styled.form`
    background: ${({ theme }) => theme.body};
    width: 90%;
    margin: auto;
    border-radius: 15px;
    box-shadow: ${({theme}) => theme.searchShadow};
    height: 40px;
    border: 2px solid ${({ theme }) => theme.body};
    overflow: hidden;
    padding: 0 1.2rem;
    position: relative;

    svg {
        fill: #aaa;
        width: 20px;
        position: absolute;
        right: 1rem;
        transform: translateY(50%);
        cursor: pointer;
    }

    @media (max-width: 922px) {
        width: 80%;
    }
    @media (max-width: 422px) {
        width: 70%;
    }
`
const Input = styled.input`
    border-color: transparent;
    width: 100%;
    margin: 0;
    padding: 0;
    height: 100%;
    border: none;
    background: transparent;
    font-weight: 600;
    letter-spacing: .1rem;
    color: ${({ theme }) => theme.text};
    
    &:focus {
        border: none;
        outline: none;
    }
    &::placeholder {
        color: #aaa;
        letter-spacing: initial;
        font-weight: initial;
    }
`


const Search = (props) => {
    const [Val, setVal] = useState('');

    const handleChange = (e) => {
        setVal(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.searchHandle(Val);
    }
    
    return(
        <SearchStyle onSubmit={handleSubmit}>
            <Input
                type='text'
                placeholder='Search City ...'
                onChange={handleChange}
            />
            <Icon onClick={handleSubmit}/>
        </SearchStyle>
    )
}

export default Search;
