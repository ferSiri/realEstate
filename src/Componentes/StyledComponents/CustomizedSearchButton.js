import React from 'react';
import styled from 'styled-components';

const CustomizedSearchButton = (props) => {

    const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgb(210,210,210);
    ${props => { return props.disabled ? 'border-color: rgb(240,240,240) !important;' : 'rgb(210,210,210);' }}
    box-shadow: 0px 0.5px 0 0 rgb(210,210,210);
    ${props => { return props.disabled ? 'box-shadow-color: rgb(240,240,240) !important;' : 'rgb(228,228,228);' }}
    ${props => { return props.disabled ? 'cursor: auto;' : 'cursor: pointer;' }}
    border-radius: 4%;
    height: 30px;
    width: 30px;
    `;

    const Glass = styled.span`
    font-size: 0.8em;
    color: rgb(43,156,218);
    `;

    return (<Container disabled={props.disabled} onClick={() => props.disabled ? null : props.onclick()}>
        <Glass className="fas fa-search"></Glass>
    </Container>)

}

export default CustomizedSearchButton;