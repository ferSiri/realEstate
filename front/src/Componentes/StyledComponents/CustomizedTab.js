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
    font-size: 0.7em;
    font-weight:500;
    display:flex;
    padding: 0 3px;
    justify-content:space-between;
    `;

    const CustomSpan = styled.span`
    margin-left: 1em;
    padding-top: 2px;
    cursor: pointer;
    `;

    return (<CustomTab onclick={props.onclick} target={props.target}>
        {props.content}
        <CustomSpan onClick={() => props.onclick(props.target)} className='fas fa-times'></CustomSpan>
    </CustomTab>)
}

export default CustomizedTab;
