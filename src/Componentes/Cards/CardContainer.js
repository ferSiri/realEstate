import React, { useContext, useEffect } from 'react';
import Card from './Card';
import { CardsContext } from '../../Contexts/CardsContext';

function CardContainer(props) {

    const { publicaciones } = props;


    return (<div className='card-container'>
        {publicaciones.map(p => <Card card={p} />)}
    </div>)
}

export default CardContainer;