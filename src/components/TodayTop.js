import styled from 'styled-components'
import React from 'react'
import dayjs from 'dayjs'
export default function TodayTop(){
    function weekday(number){
        if(number == 0){
            return 'Domingo'
        }
        else if(number == 1){
            return'Segunda'
        }
        else if(number == 2){
            return'Terça'
        }
        else if(number == 3){
            return'Quarta'
        }
        else if(number == 4){
            return'Quinta'
        }
        else if(number == 5){
            return'Sexta'
        }
        else if(number == 6){
            return'Sábado'
        }
        else return 'Out of range'
    }
    return(
        <TodayTopContainer>
            <Weekday>
                 {weekday(dayjs().day())}, {dayjs().format('DD/MM')}
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