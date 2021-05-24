import React from 'react'
import styled from 'styled-components'

export default function WeekDays(){
    return(
        <WeekdaysContainer>
            <Weekday>D</Weekday>
            <Weekday>S</Weekday>
            <Weekday>T</Weekday>
            <Weekday>Q</Weekday>
            <Weekday>Q</Weekday>
            <Weekday>S</Weekday>
            <Weekday>S</Weekday>
        </WeekdaysContainer>
    )
}

const WeekdaysContainer = styled.div`
    width: 90%;
    display: flex;
    justify-content: flex-start;
    height: 30px;
`

const Weekday = styled.div`
    width: 30px;
    height: 30px;    
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    box-sizing: border-box;
    border-radius: 5px;
    margin-right: 8px;
    color: #DBDBDB;
    font-size: 20px;
    text-align: center;
    line-height: 30px;
    font-family: Lexend Deca;
`