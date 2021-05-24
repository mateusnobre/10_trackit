import React from 'react'
import styled from 'styled-components'

export default function HabitsTop(){
return (
    <HabitsTopContainer>
        <a>Meus hábitos</a>
        <CreateHabitButton>+</CreateHabitButton>
    </HabitsTopContainer>
)
}


const HabitsTopContainer = styled.div`
    margin-top: 70px;
    display: flex;
    width: 90%;
    justify-content: space-between;
    align-items: center;
    height: 77px;
    a {
        font-size: 23px;
        color: #126BA5;
        font-family: Lexend Deca;
    }
`

const CreateHabitButton = styled.div`
    background-color: #52B6FF;
    width: 40px;
    height: 35px;
    color: white;
    font-size: 27px;
    text-align: center;
    line-height: 35px;
    border-radius: 5px;
`


