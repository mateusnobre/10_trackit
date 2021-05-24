import Logo from './Logo';
import Input from './Input';
import RectButton from './RectButton'
import styled from 'styled-components'
import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import axios from 'axios';

export default function SignUp(){
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const[name, setName] = useState('')
    const[photo, setPhoto] = useState('')
    let history = useHistory();
    function signUp(e){
        e.preventDefault();
        let data = {'email' : email, 'password' : password, 'name' : name, 'image' : photo} 
        const signUpRequest = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up', data)
        signUpRequest.then(() => {
            let path = '/';
            history.push(path);
            console.log(signUpRequest)
        })
        signUpRequest.catch(() =>{
                alert('Tente novamente, por favor')
            }
        )
    }
    return(
        <SignUpContainer>
            <Logo />
            <form onSubmit={signUp}>
                <Input placeholder='email' type='email' input={email} setInput={setEmail} />
                <Input placeholder='senha' type='password' input={password} setInput={setPassword}/>
                <Input placeholder='nome' type='text' input={name} setInput={setName} />
                <Input placeholder='foto' type='url' input={photo} setInput={setPhoto}/>
                <RectButton text='Cadastrar'/>
            </form>
            <Link to='/'>
                <SignIn>
                    Já tem uma conta? Faça SignUp!
                </SignIn>
            </Link>
        </SignUpContainer>
    )
}

const SignUpContainer = styled.div`
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