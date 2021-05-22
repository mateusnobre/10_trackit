import styled from 'styled-components';
import React from 'react';
export default function Logo(){
    return(
        <Flex>
            <LogoUp>
                <img src='./assets/img/logo_up1.svg'></img>
                <img src='./assets/img/logo_up2.svg'></img>
                <img src='./assets/img/logo_up3.svg'></img>
            </LogoUp>
            <LogoDown>
                <img src='./assets/img/logo_down.svg'></img>
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
`

const LogoText = styled.div`
    font-size: 69px;
    font-family: 'Playball';
    color: #126BA5;
`;