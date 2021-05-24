import React, { useContext} from 'react'
import BottomProgressBar from './BottomProgressBar'
import { Link } from "react-router-dom";
import styled from 'styled-components'
import UserContext from './contexts/UserContext'

export default function Bottom(){
    const {userData, setUserData} = useContext(UserContext)
    return(
        <BottomContainer>
            <Link to='/habitos/' style={{ textDecoration: 'none' }}>
                <ButtonText>Hábitos</ButtonText>
            </Link>
            <BottomProgressBar percentage={userData.dailyProgress}/>
            <Link to='/historico/' style={{ textDecoration: 'none' }}>
                <ButtonText>Histórico</ButtonText>
            </Link>
        </BottomContainer>
    )
}

const BottomContainer = styled.div`
    display: flex;
    width: 100%;
    min-width: 375px;
    height: 70px;
    background: #FFFFFF;
    bottom: 0px;
    position: fixed;
    justify-content: space-between;
`
const ButtonText = styled.div`
    color: #52B6FF;
    font-size: 18px;
    height: 70px;
    line-height: 70px;
    font-family: 'Lexend Deca', sans-serif;
    margin-right: 36px;
    margin-left: 36px;
`