import styled from 'styled-components';
import React from 'react';
import { useState } from 'react'
export default function Input(props){
    const [input, setInput] = useState("");
    return(
        <InputContainer>
        			<input placeholder={props.placeholder} value={input} onChange={event => setInput(event.target.value)}/>
        </InputContainer>
    )
}

const InputContainer = styled.div`
    background: #FFFFFF;
    width: 303px;
    height: 45px;
    color: #DBDBDB;
    margin-bottom: 6px;
    input{
        width: 303px;
        height: inherit;
        font-size: 20px;
        padding-left: 10px;
        color: #DBDBDB;
        background-image:none;
        background-color:transparent;
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none;
        border: 1px solid #D5D5D5;
        box-sizing: border-box;
        border-radius: 5px;
    }
`