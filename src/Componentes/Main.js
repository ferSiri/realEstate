import React, { useContext, useEffect } from 'react';

import { CardsContext } from '../Contexts/CardsContext';

import { totalPublicaciones } from '../MockPublicaciones';


import SideMenu from './SideMenu/SideMenu';
import CardContainer from './Cards/CardContainer';

function Main() {
    const { setFav, getPublicaciones, filteredCards } = useContext(CardsContext);

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

    return (

        <div className="main">
            <SideMenu />
            <CardContainer publicaciones={filteredCards} />
        </div>

    );
}

export default Main;




