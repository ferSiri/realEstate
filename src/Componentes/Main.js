import React, { useContext, useEffect } from 'react';

import { CardsContext } from '../Contexts/CardsContext';

import { totalPublicaciones } from '../MockPublicaciones';


import SideMenu from './SideMenu';

function Main() {
    const { cards, setFav, getPublicaciones, filteredCards } = useContext(CardsContext);

    useEffect(() => {
        //SE SIMULA LA OBTENCIÓN DE DATOS, SI NO EXISTE YA EN EL LOCALSTORAGE (PRIMERA CARGA), SE GUARDA EN EL MISMO EL ARREGLO DE PUBLICACIONES, SINO SE GUARDA EN EL STORE COMO SI SE HUBIERA OBTENIDO DE DB
        let publicaciones = JSON.parse(localStorage.getItem("publicaciones"));
        if (publicaciones) {
            getPublicaciones(publicaciones)
        } else {
            localStorage.setItem("publicaciones", JSON.stringify(totalPublicaciones));
            getPublicaciones(totalPublicaciones);
        }
    }, [])

    let pubs = null;
    if (filteredCards.length > 0) {
        pubs = filteredCards && filteredCards.map(c => {

            return <div key={c.posting_id}>
                <div>{c.posting_location.address}</div>
                <div>{c.posting_id}</div>
                <div>{c.favorito ? "es favorito" : "no es favorito"}</div>
                <div onClick={() => setFav(c.posting_id)}>fav</div>
            </div>
        })
    } else {
        /* pubs = cards && cards.map(c => {

            return <div key={c.posting_id}>
                <div>{c.posting_location.address}</div>
                <div>{c.posting_id}</div>
                <div>{c.favorito ? "es favorito" : "no es favorito"}</div>
                <div onClick={() => setFav(c.posting_id)}>fav</div>
            </div>
        }) */
    }

    return (

        <div>
            <SideMenu />
            {pubs}
        </div>

    );
}

export default Main;




