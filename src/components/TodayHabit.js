import React from 'react'
import styled from 'styled-components'
import done from './assets/img/done.svg'

export default function TodayHabit(){
    return(
        <TodayHabitContainer>
            <HabitsInfos>
                <HabitTitle>Ler 1 capítulo de livro</HabitTitle>
                <HabitStreak>
                    Sequência atual: 3 dias
                </HabitStreak>
                <HabitStreak>
                    Seu recorde: 5 dias
                </HabitStreak>
            </HabitsInfos>
            <IsDone>
                <img src={done} alt='Done'/>
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
    background: #EBEBEB;
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