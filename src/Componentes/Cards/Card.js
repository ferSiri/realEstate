import React, { useContext, useEffect } from 'react';
import Helper from '../../Helpers';

function Card(props) {
    const { card } = props;
    let antiguedadPublicacion = Helper.CalcularDiferenciaDias(card.publish_date);

    return (<div className='card'>
        <div className='pic-container'>

        </div>
        <div>
            <p className='card-title'>{card.title}</p>
            <p className='card-location'>{card.posting_location.address + ", " + card.posting_location.zone + ", " + card.posting_location.city}</p>
            <p className='card-description'>{card.posting_description}</p>
            <div className='card-footer'>
                <p>{"Publicado hace " + antiguedadPublicacion + (antiguedadPublicacion > 1 ? " días" : " día")}</p>
                <button>styled</button>
            </div>
        </div>


    </div>)
}

export default Card;