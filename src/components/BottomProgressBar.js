import React from 'react'
import styled from 'styled-components'
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function BottomProgressBar(props){
    return(
        <BottomProgressBarContainer>
            <CircularProgressbar
                value={props.percentage}
                text='Hoje'
                background
                backgroundPadding={6}
                styles={buildStyles({
                  backgroundColor: "#3e98c7",
                  textColor: "#fff",
                  pathColor: "#fff",
                  trailColor: "transparent",
                })}></CircularProgressbar>
        </BottomProgressBarContainer>
    )
}

const BottomProgressBarContainer = styled.div`
    width: 91px;
    height: 91px;
    border-radius: 45.5px;
    position: fixed;
    left: 50%; 
    bottom: 10px;
    transform: translateX(-50%);
    background: #52B6FF;
    color: white;
    font-size: 18px;
    font-family: 'Lexend Deca', sans-serif;
    text-align: center;
    line-height: 91px;
`