import {useState} from 'react'
import styled from 'styled-components'
import React from 'react'
import Weekdays from './Weekdays'
import axios from 'axios'

export default function CreateHabit(props){
    const [input, setInput] = useState("");
    const [days, setDays] = useState([]);
    const config = {
    	headers: {
    		"Authorization": `Bearer ${props.token}`
    	}
    }
    function createHabit(){
        let data = {
            'name': input,
            'days': days
        }
        const createHabitRequest = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', data, config)
        createHabitRequest.then(
            () => {
                setInput("");
                setDays([]);
                props.setShow(false);
            }
        )
        createHabitRequest.catch(
            (e) => {
                alert('Erro ao criar o hábito')
            }
        )
    }

    return(
        <CreateHabitContainer show={props.show}>
            <HabitTitle>
        	    <input placeholder={props.placeholder} value={input} onChange={event => setInput(event.target.value)}/>
            </HabitTitle>
            <Weekdays days={days} setDays={setDays}/>
            <Buttons>
                <CancelButton onClick={() => {props.setShow(false)}}><a>Cancelar</a></CancelButton>
                <SaveButton onClick={createHabit}><a>Salvar</a></SaveButton>
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
    display: ${props => props.show? 'flex' : 'none'};
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