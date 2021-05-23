import Logo from './components/Logo';
import Input from './components/Input';
import styled from 'styled-components'
import React from 'react';

export default function Login(){
    return(
        <LoginContainer>
            <Logo />
            <Input placeholder='email'/>
            <Input placeholder='senha'/>
        </LoginContainer>
    )
}

const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
`
