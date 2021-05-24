import React from 'react';
import styled from 'styled-components';
import Weekdays from './Weekdays';
import delete_icon from './assets/img/delete.svg'
import axios from 'axios'

export default function Habit(props){
    function deleteHabit(id){
        let confirm = window.confirm('Você realmente deseja deletar este hábito?');
        if (confirm){
            const deleteHabitRequest = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}` , props.config)
            deleteHabitRequest.then(() => {props.habitsReloader(props.loadHabits+1)})
            deleteHabitRequest.catch((e) => {alert('Erro ao deletar o hábito')})
        }
    }
    return(
        <HabitContainer>
            <a onClick={() => deleteHabit(props.id)}><img src={delete_icon} alt='delete'/></a>
            <a>{props.title}</a>
            <Weekdays days={props.days} setDays={() => {}}/>
        </HabitContainer>
    )
}

const HabitContainer = styled.div`
    display: flex;
    width: 90%;
    height: 91px;
    border-radius: 5px;
    background-color: #FFFFFF;
    margin-bottom: 10px;
    background-color: white;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    a {
        width: 90%;
        font-size: 20px;
        font-family: Lexend Deca;
        color: #666666;
        line-height: 25px;
        color: #666666;
        text-align: left;
        margin-bottom: 8px;
    }
    img {
        width: 13px;
        height: 16px;
        position: absolute;
        top: 10px;
        right: 10px;
    }
`
