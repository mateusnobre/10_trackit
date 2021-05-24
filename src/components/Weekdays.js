import React, { useEffect } from 'react'
import styled from 'styled-components'

export default function WeekDays(props){
    const weekdaysData = [[0,'D'],[1,'S'], [2,'T'], [3,'Q'], [4,'Q'],[5,'S'],[6,'S']]
    function processDay(id){
         if (props.days.includes(id)){
            props.setDays(props.days.filter(function (value) {
                return value !== id;
            }))
        }
        else if (!props.days.includes(id)){
            props.setDays([...props.days, id])
        }
    }
    return(
        <WeekdaysContainer>
            {weekdaysData.map(weekday => <Weekday color={props.days.includes(weekday[0])? '#FFFFFF' : '#D5D5D5'} background={props.days.includes(weekday[0])? '#D5D5D5' : '#FFFFFF'} onClick={() => processDay(weekday[0])}>{weekday[1]}</Weekday>)}
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
    background: ${props => props.background};
    border: 1px solid #D5D5D5;
    box-sizing: border-box;
    border-radius: 5px;
    margin-right: 8px;
    font-size: 20px;
    text-align: center;
    line-height: 30px;
    font-family: Lexend Deca;
    color: ${props => props.color};
`