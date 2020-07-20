import React, { useContext, useEffect } from 'react';
import Helper from '../../Helpers';
import CustomizedButton from '../StyledComponents/CustomizedButton';

function Card(props) {
    const { card } = props;
    let antiguedadPublicacion = Helper.CalcularDiferenciaDias(card.publish_date);

    let tipoPublicacion = "";
    let picContainerClass = "";
    let topBorderClass = "";

    switch (card.publication_plan) {
        case "SUPERHIGHLIGHTED": {
            tipoPublicacion = "Super destacado";
            picContainerClass = "pic-container-xl";
            topBorderClass = " top-violet";
            break;
        }
        case "HIGHLIGHTED": {
            tipoPublicacion = "Destacado";
            picContainerClass = "pic-container";
            topBorderClass = " top-aqua";
            break;
        }
        default: {
            tipoPublicacion = "Simple";
            picContainerClass = "pic-container";
            topBorderClass = "";
            break;
        }
    }

    return (<div className={'card' + topBorderClass}>
        <div className={picContainerClass}>
            <div ></div>
        </div>
        <div className='card-right'>
            <p className='card-title'>{card.title}</p>
            <p className='card-location'>{card.posting_location.address + ", " + card.posting_location.zone + ", " + card.posting_location.city}</p>
            <div className='card-description'><span>{card.posting_description}</span></div>
            <div className='card-footer'>
                <p> <span className='fas fa-history'></span>{"Publicado hace " + antiguedadPublicacion + (antiguedadPublicacion > 1 ? " días" : " día")}</p>
                <CustomizedButton content={"Contactar"} onclick={() => console.log("click")} />
            </div>
        </div>


    </div>)
}

export default Card;