import sponge_bob from './assets/img/sponge_bob.svg'
import styled from 'styled-components'
import React from 'react'

export default function Top(){
   return(
       <TopContainer>
           <a>TrackIt</a>
           <img src={sponge_bob} alt='sponge_bob'/>
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
    }
`