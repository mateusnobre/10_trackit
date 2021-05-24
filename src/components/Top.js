import styled from 'styled-components'
import React from 'react'
import {useContext} from 'react'
import UserContext from './contexts/UserContext'

export default function Top(){
   const {userData, setUserData} = useContext(UserContext)
   return(
       <TopContainer>
           <a>TrackIt</a>
           <img src={userData.image} alt='sponge_bob'/>
       </TopContainer>
   ) 
}

const TopContainer = styled.div`
    display: flex;
    height: 70px;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    position: fixed;
    top: 0;
    a{
        margin-left: 5%;
        font-family: Playball;
        color: white;
        font-size: 39px;
    }
    img{
        margin-right: 5%;
        object-fit: fill;
        width: 51px;
        height: 51px;
    }
`