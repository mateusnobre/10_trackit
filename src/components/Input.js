import styled from 'styled-components';
import React from 'react';

export default function Input(props){
    const [input, setInput] = useState("");
    return(
        <InputContainer>
        			<input placeholder={props.placeholder} value={input} onChange={event => setInput(event.target.value)} />
        </InputContainer>
    )
}

InputContainer = styled.div`
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    box-sizing: border-box;
    border-radius: 5px;
    width: 303px;
    height: 45px;
    margin-bottom: 6px;
`