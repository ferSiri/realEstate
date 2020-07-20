import React from 'react';
import styled from 'styled-components';

const CustomizedRadioButton = (props) => {

    const Item = styled.div`
    display: flex;
    align-items: center;
    height: 48px;
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
    border: 1px solid orange;
    `;

    const RadioButton = styled.input`
    opacity: 0;
    z-index: 1;
    border-radius: 50%;
    width: 15px;
    height: 15px;
    margin-right: 10px;
    &:hover ~ ${RadioButtonLabel} {
        
        &::after {
        content: "";
        display: block;
        border-radius: 50%;
        width: 8px;
        height: 8px;
        margin: 2px;
        background: orange;
        }
    }
    ${props =>
            props.checked &&
            ` 
        &:checked + ${RadioButtonLabel} {
        background: #db7290;
        border: 1px solid #db7290;
        &::after {
            content: "";
            display: block;
            border-radius: 50%;
            width: 12px;
            height: 12px;
            margin: 6px;
            box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.1);
            background: white;
        }
        }
    `}
    `;

    const Title = styled.div`
        position: relative;
        top: -4px;
        `;

    return (<Item>
        <RadioButton
            type="radio"
            name="radio"
            value={props.value}
            checked={props.checked}
            onChange={event => props.handleSelectChange(event)}
        />
        <RadioButtonLabel />
        <Title>{props.title}</Title>
    </Item>)
}