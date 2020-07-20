import React from 'react';
import styled from 'styled-components';

const CustomizedTab = (props) => {

    const CustomTab = styled.div`
    border-radius: 4%;
    border-style: solid;
    border-color: #FCA267;
    background-color: #FCA267;
    height: 1.3em;
    color: white;
    font-size: 0.5em;
    font-weight:500;
    cursor: pointer;
    display:flex;
    justify-content:space-between;
    `;

    return (<CustomTab onclick={props.onclick} target={props.target}>
        {props.content}
        <span onClick={() => props.onclick(props.target)} className='fas fa-times'></span>
    </CustomTab>)
}

export default CustomizedTab;
