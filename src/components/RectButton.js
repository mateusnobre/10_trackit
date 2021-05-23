import styled from 'styled-components';
import { Link } from "react-router-dom";
import React from 'react';

export default function RectButton(props){
    return(
        <Link to={'hoje/'} style={{ textDecoration: 'none' }}>
            <ButtonContainer>{props.text}</ButtonContainer>
        </Link>
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
`