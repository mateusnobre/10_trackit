import Top from './Top';
import TodayTop from './TodayTop'
import TodayHabit from './TodayHabit'
import Bottom from './Bottom'
import styled from 'styled-components'
import React, { useState, useEffect, useContext } from 'react';
import UserContext from './contexts/UserContext'
import axios from 'axios'

export default function Today(){
    const {userData, setUserData} = useContext(UserContext)
    const[todayHabitsData, setTodayHabitsData] = useState([]);
    const[reloadTodayData, setReloadTodayData] = useState(0);
    const config = {
    	headers: {
    		"Authorization": `Bearer ${userData.token}`
    	}
    }
    function setProgress(data){
        let progress = 0
        for (var i = 0; i < data.length; i++){
            if(data[i].done){
                progress = progress + 1
            }
        }
        console.log(progress)
        console.log(data.length)
        progress = 100*progress/data.length
        console.log({...userData, 'dailyProgress': progress})
        setUserData({...userData, 'dailyProgress': progress})
    }
    useEffect(() => {
        const retrieveTodayHabitsRequest = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', config)
        retrieveTodayHabitsRequest.then((response) => {setTodayHabitsData(response.data); setProgress(response.data)})
    }, [reloadTodayData])
    return(
        <TodayContainer>
            <Top />
            <TodayTop progress={userData.dailyProgress}/>
            {todayHabitsData.map(todayHabit => <TodayHabit reloadTodayData={reloadTodayData} setReloadTodayData={setReloadTodayData} config={config} id={todayHabit.id} title={todayHabit.name} currentSequence={todayHabit.currentSequence} longestSequence={todayHabit.longestSequence} done={todayHabit.done}> </TodayHabit>)}
            <Bottom/>
        </TodayContainer>
    )
}

const TodayContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    min-width: 375px;
    min-height: 527px;
    flex-direction: column;
    align-items: center;
    background-color: #E5E5E5;
`