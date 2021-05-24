import React from 'react'
import styled from 'styled-components'
import done from './assets/img/done.svg'
import axios from 'axios'

export default function TodayHabit(props){
    function markDone(id){
        if (!props.done){
            const markDoneRequest = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`, null, props.config)
            markDoneRequest.then(() => props.setReloadTodayData(props.reloadTodayData+1))
            markDoneRequest.catch((e) => {alert('Não foi possível marcar este hábito como feito'); console.log(e)})
        }
        else if (props.done) {
            const unmarkDoneRequest = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`, null, props.config)
            unmarkDoneRequest.then(() => props.setReloadTodayData(props.reloadTodayData+1))
            unmarkDoneRequest.catch((e) => {alert('Não foi possível desmarcar este hábito como feito'); console.log(e)})
        }
    }
    return(
        <TodayHabitContainer>
            <HabitsInfos>
                <HabitTitle>{props.title}</HabitTitle>
                <HabitStreak>
                    Sequência atual: {props.currentSequence} dias
                </HabitStreak>
                <HabitStreak>
                    Seu recorde: {props.longestSequence} dias
                </HabitStreak>
            </HabitsInfos>
            <IsDone isDone={props.done}>
                <a onClick={() => markDone(props.id)}><img src={done} alt='Done'/></a>
            </IsDone>
        </TodayHabitContainer>
    )
}

const TodayHabitContainer = styled.div`
    background-color: #FFFFFF;
    border-radius: 5px;
    width: 90%;
    height: 94px;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: Lexend Deca;
`
const HabitsInfos = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-left: 3.8%;
`

const HabitTitle = styled.div`
    font-size: 20px;
    color: #666666;
    margin-bottom: 0px;
`

const HabitStreak = styled.div`
    color: #666666;
    font-size: 13px;
`

const IsDone = styled.div`
    background: ${props => props.isDone? '#8FC549' : '#EBEBEB'};
    border: 1px solid #E7E7E7;
    box-sizing: border-box;
    border-radius: 5px;
    width: 69px;
    height: 69px;
    margin-right: 3.8%;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
        width: 35.1px;
        height: 28px;
        object-fit: contain;
    }
`