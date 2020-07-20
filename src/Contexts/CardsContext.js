import React, { createContext, useState } from 'react';

export const CardsContext = createContext();



const CardsContextProvider = (props) => {


    const [cards, setCards] = useState([]);
    const [filteredCards, setFilteredCards] = useState([]);

    const applyFilter = (filter, value) => {
        let section = "";

        switch (filter) {
            case "address":
            case "zone":
            case "city":
                section = "posting_location";
                break;
            case "price":
                section = "posting_prices";
                break;
            case "operation_type_id":
                section = "operation_type";
                break;
        }

        setFilteredCards(cards.filter(c => c[section][filter].toLowerCase().includes(value.toLowerCase())))
    };

    const getPublicaciones = (publicaciones) => {
        setCards(publicaciones);
    }

    const setFav = (postingId) => {
        setCards(cards.map(c => {
            if (c.posting_id == postingId) {
                c.favorito = !c.favorito;
            }
            return c
        }))
        localStorage.setItem("publicaciones", JSON.stringify(cards));
    }

    return (
        <CardsContext.Provider value={{ cards, applyFilter, getPublicaciones, filteredCards, setFav }}>
            {props.children}
        </CardsContext.Provider>
    );
}

export default CardsContextProvider;