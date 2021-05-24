import {useState} from 'react'
import styled from 'styled-components'
import React from 'react'
import Weekdays from './Weekdays'
export default function CreateHabit(props){
    const [input, setInput] = useState("");
    return(
        <CreateHabitContainer>
            <HabitTitle>
        	    <input placeholder={props.placeholder} value={input} onChange={event => setInput(event.target.value)}/>
            </HabitTitle>
            <Weekdays/>
            <Buttons>
                <CancelButton>Cancelar</CancelButton>
                <SaveButton>Salvar</SaveButton>
            </Buttons>
        </CreateHabitContainer>
    )
}

const CreateHabitContainer = styled.div`
    width: 90%;
    height: 180px;
    border-radius: 5px;
    background-color: #FFFFFF;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const HabitTitle  = styled.div`
    width: 90%;
    height: 45px;
    margin-bottom: 8px;
    background: #FFFFFF;
    border-radius: 5px;
    input{
        width: 100%;
        height: inherit;
        font-size: 20px;
        font-family: 'Lexend Deca', sans-serif;
        padding-left: 10px;
        color: #DBDBDB;
        background-image:none;
        background-color:transparent;
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none;
        border: 1px solid #D5D5D5;
        box-sizing: border-box;
        border-radius: 5px;
    }
`

const Buttons = styled.div`
    width: 90%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 29px;
`
const CancelButton = styled.div`
    color: #52B6FF;
    font-size: 16px;
    font-family: Lexend Deca;
`

const SaveButton = styled.div`
    width: 84px;
    height: 35px;
    background: #52B6FF;
    border-radius: 4.63636px;
    margin-left: 23px;
    color: white;
    font-size: 16px;
    font-family: Lexend Deca;
    text-align: center;
    line-height: 35px;

`