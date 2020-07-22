import React, { useContext, useEffect } from 'react';
import Helper from '../../Helpers';
import CustomizedButton from '../StyledComponents/CustomizedButton';
import CustomizedCarousel from '../StyledComponents/CustomizedCarousel';
import ModalContacto from "../Modals/ModalContacto";
import useModal from '../../Hooks/UseModal';


function Card(props) {

    const { card, setFav, selectCurrentCardPic, currentCardPics, setContact } = props;

    const { isShowing, toggle } = useModal();

    let antiguedadPublicacion = Helper.CalcularDiferenciaDias(card.publish_date);

    let tipoPublicacion = "";
    let cardLeft = "";
    let topBorderClass = "";

    switch (card.publication_plan) {
        case "SUPERHIGHLIGHTED": {
            tipoPublicacion = "Super destacado";
            cardLeft = "card-left-xl";
            topBorderClass = " top-violet";
            break;
        }
        case "HIGHLIGHTED": {
            tipoPublicacion = "Destacado";
            cardLeft = "card-left";
            topBorderClass = " top-aqua";
            break;
        }
        default: {
            tipoPublicacion = "Simple";
            cardLeft = "card-left";
            topBorderClass = "";
            break;
        }
    }

    let imgName = currentCardPics["c" + card.posting_id];

    return (<div className={'card' + topBorderClass}>
        <ModalContacto
            targetId={card.posting_id}
            isShowing={isShowing}
            toggle={toggle}
            setContact={setContact}
        />
        <div className={cardLeft}>
            <CustomizedCarousel
                plan={tipoPublicacion}
                selectCurrentCardPic={selectCurrentCardPic}
                targetId={card.posting_id}
                setFav={setFav}
                isFav={card.favorito}
                imagen={imgName} />
            <div className="pic-footer">
                <div className='price'>
                    {Helper.ConvertirMonto(card.posting_prices[0].price.amount, card.posting_prices[0].price.currency)}
                </div>
                {card.posting_prices[0].expenses && <div className="expensas">{"+ " + Helper.ConvertirMonto(card.posting_prices[0].expenses.amount, card.posting_prices[0].expenses.currency)}</div>}
            </div>
        </div>
        <div className='card-right'>
            <p className='card-title'>{card.title}</p>
            <p className='card-location'>{card.posting_location.address + ", " + card.posting_location.zone + ", " + card.posting_location.city}</p>
            <div className='card-description'><div>{card.posting_description}</div></div>
            <div className='card-footer'>
                <p> <span className='fas fa-history'></span>{"Publicado hace " + antiguedadPublicacion + (antiguedadPublicacion > 1 ? " días" : " día")}</p>
                <CustomizedButton disabled={card.contactado} content={!card.contactado ? "Contactar" : "Contactado"} onclick={() => !card.contactado ? toggle() : null} />
            </div>
        </div>
    </div>)
}

export default Card;