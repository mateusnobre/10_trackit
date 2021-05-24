import React from 'react'
import Top from './Top'
import Bottom from './Bottom'
import styled from 'styled-components'

export default function History(){
    return(
        <HistoryContainer>
            <Top/>
            <Title>Histórico</Title>
            <Subtitle>Em breve você poderá ver o histórico dos seus hábitos aqui!</Subtitle>
            <Bottom/>
        </HistoryContainer>
    )
}

const HistoryContainer = styled.div`
    margin-top: 70px;
    display: flex;
    width: 100%;
    min-width: 375px;
    min-height: 527px;
    flex-direction: column;
    align-items: center;
    background-color: #E5E5E5;
`

const Subtitle = styled.div`
    width: 90%;
    font-size: 18px;
    color:  #666666;
    line-height: 23px;
    font-family: Lexend Deca;
    text-align: left;
`

const Title = styled.div`
    width: 90%;
    margin-top: 28px;
    font-size: 23px;
    color: #126BA5;
    line-height: 29px;
    margin-bottom: 17px;
    font-family: Lexend Deca;
`