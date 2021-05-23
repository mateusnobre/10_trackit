import Logo from './Logo';
import Input from './Input';
import RectButton from './RectButton'
import styled from 'styled-components'
import React from 'react';
import { Link } from "react-router-dom";

export default function Login(){
    return(
        <LoginContainer>
            <Logo />
            <Input placeholder='email'/>
            <Input placeholder='senha'/>
            <RectButton text='Entrar'/>
            <Link to='cadastro/'>
                <SignIn>
                    Não tem uma conta? Cadastre-se!
                </SignIn>
            </Link>
        </LoginContainer>
    )
}

const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const SignIn = styled.div`
    color: #52B6FF;
    font-size: 14px;
    text-decoration-line: underline;
    font-family: 'Lexend Deca', sans-serif;
`