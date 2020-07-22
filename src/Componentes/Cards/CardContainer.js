import React, { useContext, useEffect } from 'react';
import Card from './Card';
import { CardsContext } from '../../Contexts/CardsContext';


function CardContainer(props) {

    const { publicaciones } = props;
    const { setFav, selectCurrentCardPic, currentCardPics, setContact } = useContext(CardsContext);

    return (<div className='card-container'>
        {publicaciones.map(p => <Card
            setContact={setContact}
            selectCurrentCardPic={selectCurrentCardPic}
            currentCardPics={currentCardPics}
            setFav={setFav}
            card={p}
        />)}
    </div>)
}

export default CardContainer;