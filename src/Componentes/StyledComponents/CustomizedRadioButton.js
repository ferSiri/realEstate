import React from 'react';
import styled from 'styled-components';

const CustomizedRadioButton = (props) => {

    const Item = styled.div`
    display: flex;
    align-items: center;
    height: 30px;
    position: relative;
    `;

    const RadioButtonLabel = styled.label`
    position: absolute;
    top: 25%;
    left: 4px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: white;
    border: 1px solid #FCA267;
    cursor:pointer;
    `;

    const RadioButton = styled.input`
    opacity: 0;
    z-index: 1;
    border-radius: 50%;
    width: 15px;
    height: 15px;
    margin-right: 6px;
    cursor:pointer;
    &:hover ~ ${RadioButtonLabel} {
        
        &::after {
        content: "";
        display: block;
        border-radius: 50%;
        width: 8px;
        height: 8px;
        margin: 2px;
        background: #FCA267;
        }
    }
    ${props =>
            props.checked &&
            ` 
        &:checked + ${RadioButtonLabel} {
        border: 1px solid #FCA267;
        &::after {
            content: "";
        display: block;
        border-radius: 50%;
        width: 8px;
        height: 8px;
        margin: 2px;
        background: #FCA267;
        }
        }
    `}
    `;

    const Title = styled.div`
        font-size: 0.7em;
        `;

    return (<Item>
        <RadioButton
            type="radio"
            name="radio"
            value={props.value}
            checked={props.checked}
            onChange={event => props.selectRadio(event.target.value)}
        />
        <RadioButtonLabel />
        <Title>{props.title}</Title>
    </Item>)
}

export default CustomizedRadioButton;