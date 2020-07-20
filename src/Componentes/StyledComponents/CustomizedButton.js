import React from 'react';
import styled from 'styled-components';

const CustomizedButton = (props) => {

    const CustomButton = styled.button`
    border-radius: 4%;
    border-style: solid;
    border-color: #FCA267;
    background-color: #FCA267;
    height: 2em;
    padding: 5px 10px;
    color: white;
    font-size: 0.9em;
    font-weight:500;
    cursor: pointer;
    `;

    return (<CustomButton onClick={() => props.onclick()}>
        {props.content}
    </CustomButton>)
}

export default CustomizedButton;