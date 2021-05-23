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
            <Input placeholder='nome'/>
            <Input placeholder='foto'/>
            <RectButton text='Cadastrar'/>
            <Link to='/'>
                <SignIn>
                    Já tem uma conta? Faça login!
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
    font-family: 'Lexend Deca', sans-serif;
    text-decoration-line: underline;
`