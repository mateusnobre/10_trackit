import styled from 'styled-components';
import React from 'react';
import logo_up1 from './assets/img/logo_up1.svg'
import logo_up2 from './assets/img/logo_up2.svg'
import logo_up3 from './assets/img/logo_up3.svg'
import logo_down from './assets/img/logo_down.svg'

export default function Logo(){
    return(
        <Flex>
            <LogoUp>
                <img src={logo_up1} alt='Logo Up1'></img>
                <img src={logo_up2} alt='Logo Up2'></img>
                <img src={logo_up3} alt='Logo Up3'></img>
            </LogoUp>
            <LogoDown>
                <img src={logo_down} alt='Logo Down'></img>
            </LogoDown>
            <LogoText>
                TrackIt
            </LogoText>
        </Flex>
    )
}
const LogoUp = styled.div`
    display: flex;
    position: relative;
    top: 27px;
`
const LogoDown = styled.div`
    display: flex;
`
const Flex = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 32px;
`

const LogoText = styled.div`
    font-size: 69px;
    font-family: 'Playball';
    color: #126BA5;
`;