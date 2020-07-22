import React from 'react';
import styled from 'styled-components';

const CustomizedButton = (props) => {

    const CustomButton = styled.button`
    border-radius: 4%;
    border-style: solid;
    border-color: #FCA267;
    ${props => { return props.disabled ? 'background-color: rgb(180,180,180); border-color: rgb(180,180,180);' : 'background-color: #FCA267; border-color: #FCA267;' }}
    height: 2em;
    padding: 5px 10px;
    color: white;
    font-size: 0.9em;
    font-weight:500;
    cursor: pointer;
    `;

    return (<CustomButton disabled={props.disabled} onClick={() => props.onclick()}>
        {props.content}
    </CustomButton>)
}

export default CustomizedButton;