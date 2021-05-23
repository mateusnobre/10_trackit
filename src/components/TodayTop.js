import sponge_bob from './assets/img/sponge_bob.svg'
import styled from 'styled-components'
import React from 'react'
import DayJS from 'react-dayjs'

export default function TodayTop(){
   return(
       <TodayTopContainer>
           <Weekday>
                Segunda, 17/05
           </Weekday>
           <HabitsStatus>
                Nenhum hábito concluído
           </HabitsStatus>
       </TodayTopContainer>
   ) 
}

const TodayTopContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 70px;
    height: 110px;
    width: 90%;
    justify-content: center;
    align-items: flex-start;
    a{
        margin-left: 5%;
        font-family: 'Lexend Deca';
        color: white;
        font-size: 39px;
    }
    img{
        margin-right: 5%;
    }
`

const Weekday = styled.div`
    color: #126BA5;
    font-size: 23px;
    font-family: Lexend Deca;
`

const HabitsStatus = styled.div`
    color: #BABABA;
    font-size: 23px;
    font-family: Lexend Deca;
`