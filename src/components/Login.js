import Logo from './Logo';
import Input from './Input';
import RectButton from './RectButton'
import styled from 'styled-components'
import React, { useState } from 'react';
import axios from 'axios'
import { Link } from "react-router-dom";
import UserContext from './contexts/UserContext'

export default function Login(){
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    function login(e){
        e.preventDefault();
        let data = {'email': email, 'password' : password}
        const loginRequest = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login')
        loginRequest.then(
            {

            }
        )
    }
    return(
        <LoginContainer>
            <Logo />
            <form onSubmit={login}>
                <Input placeholder='email' type='email' input={email} setInput={setEmail}/>
                <Input placeholder='senha' type='password' input={password} setInput={setPassword}/>
            </form>
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