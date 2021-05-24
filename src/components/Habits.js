import Top from './Top';
import HabitsTop from './HabitsTop'
import Habit from './Habit'
import CreateHabit from './CreateHabit'
import Bottom from './Bottom'
import styled from 'styled-components'
import React from 'react';

export default function Habits(){
    return(
        <HabitsContainer>
            <Top />
            <HabitsTop />
            <CreateHabit />
            <Habit title='Ler 1 capítulo de livro'/>
            <Text>
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
`