import Top from './Top';
import HabitsTop from './HabitsTop'
import Habit from './Habit'
import CreateHabit from './CreateHabit'
import Bottom from './Bottom'
import styled from 'styled-components'
import React, { useEffect, useContext, useState } from 'react';
import UserContext from './contexts/UserContext'
import axios from 'axios'

export default function Habits(){
    const {userData, setUserData} = useContext(UserContext)
    const[numberOfHabits,setNumberOfHabits] = useState(0);
    const[habitsData, setHabitsData] = useState([]);
    const[loadHabits, setLoadHabits] = useState(0);
    const[showCreateHabit, setShowCreateHabit] = useState(true)
    const config = {
    	headers: {
    		"Authorization": `Bearer ${userData.token}`
    	}
    }
    useEffect(() => {
        const retrieveHabitsRequest = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits' , config)
        retrieveHabitsRequest.then((response) => {setHabitsData(response.data); setNumberOfHabits(response.data.length)})
    }, [loadHabits])
    return(
        <HabitsContainer>
            <Top />
            <HabitsTop show={showCreateHabit} setShow={setShowCreateHabit}/>
            <CreateHabit token={userData.token} setShow={setShowCreateHabit} show={showCreateHabit}/>
            {habitsData.map(habit => <Habit habitsReloader={setLoadHabits} habits={loadHabits}id={habit.id} config={config} title={habit.name} days={habit.days}> </Habit>)}
            <Text show={numberOfHabits > 0? false : true}>
                Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
            </Text>
            <Bottom />
        </HabitsContainer>
    )
}

const HabitsContainer = styled.div`
    display: flex;
    width: 100%;
    min-width: 375px;
    min-height: 527px;
    flex-direction: column;
    align-items: center;
    background-color: #E5E5E5;
`
const Text = styled.div`
    width: 90%;
    font-family: Lexend Deca;
    margin-top: 29px;
    color: #666666;
    display: ${props => props.show? 'block' : 'none'};
`