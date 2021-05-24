import styled from 'styled-components';
import React from 'react';

export default function RectButton(props){
    return(
        <ButtonContainer>
            <button type='submit'>{props.text}</button>
        </ButtonContainer>
    )
}

const ButtonContainer = styled.div`
    background: #52B6FF;
    width: 303px;
    height: 45px;
    color: white;
    margin-bottom: 36px;
    font-size: 21px;
    line-height: 45px;
    text-align: center;
    border-radius: 5px;
    font-family: 'Lexend Deca', sans-serif;
    button{
        width: inherit;
        height: inherit;
        background: none;
	    color: inherit;
	    border: none;
	    padding: 0;
	    font: inherit;
	    cursor: pointer;
	    outline: inherit;
    }
`