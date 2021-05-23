import Logo from './Logo';
import Top from './Top';
import TodayTop from './TodayTop'
import TodayHabit from './TodayHabit'
import Bottom from './Bottom'
import styled from 'styled-components'
import React from 'react';
import { Link } from "react-router-dom";

export default function Today(){
    return(
        <TodayContainer>
            <Top />
            <TodayTop />
            <TodayHabit />
            <Bottom />
        </TodayContainer>
    )
}

const TodayContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    min-width: 375px;
    min-height: 527px;
    flex-direction: column;
    align-items: center;
    background-color: #E5E5E5;
`