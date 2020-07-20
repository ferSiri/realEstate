import React, { createContext, useState } from 'react';

export const CardsContext = createContext();



const CardsContextProvider = (props) => {


    const [cards, setCards] = useState([]);

    const [filteredCards, setFilteredCards] = useState([]);

    const [filters, setFilter] = useState({
        address: {
            value: "",
            isOpen: false
        },
        zone: {
            value: "",
            isOpen: false
        },
        city: {
            value: "",
            isOpen: false
        },
        operation_type_id: {
            value: 0,
            isOpen: false
        }
    });

    //HOOK PARA SETEAR EL VALOR DE LOS FILTROS
    const setFilters = (filter, value) => {
        setFilter({
            ...filters,
            [filter]: {
                ...filters[filter],
                value
            }
        })
    };

    //HOOK PARA DESPLEGAR O COLAPSAR LA SECCIÓN DE FILTRO CORRESPONDIENTE
    const openFilter = (filter) => {
        setFilter({
            ...filters,
            [filter]: {
                ...filters[filter],
                isOpen: !filters[filter].isOpen
            }
        })
    };

    //HOOK PARA APLICAR FILTROS
    const applyFilter = () => {
        //si existen filtros se aplican
        setFilteredCards(cards.filter(c =>
            c.posting_location.address.includes(filters.address.value) &&
            c.posting_location.zone.includes(filters.zone.value) &&
            c.posting_location.city.includes(filters.city.value) &&
            (filters.operation_type_id.value == 0 || c.operation_type.operation_type_id == filters.operation_type_id.value)
        ))
    };

    //HOOK PARA OBTENER LAS PUBLICACIONES
    const getPublicaciones = (publicaciones) => {
        setCards(publicaciones);
        setFilteredCards(publicaciones);
    }

    //HOOK PARA MARCAR PUBLICACIÓN COMO FAVORITA
    const setFav = (postingId) => {
        setCards(cards.map(c => {
            if (c.posting_id == postingId) {
                c.favorito = !c.favorito;
            }
            return c
        }))
        localStorage.setItem("publicaciones", JSON.stringify(cards));
    }

    //HOOK PARA SELECCIONAR UN TIPO DE OPERACIÓN Y APLICAR EL FILTRO
    const selectRadio = (radioId) => {

        setFilter({
            ...filters,
            operation_type_id: {
                ...filters.operation_type_id,
                value: radioId
            }
        })

        setFilteredCards(cards.filter(c =>
            c.posting_location.address.includes(filters.address.value) &&
            c.posting_location.zone.includes(filters.zone.value) &&
            c.posting_location.city.includes(filters.city.value) &&
            (radioId == 0 || c.operation_type.operation_type_id == radioId)
        ))
    }

    return (
        <CardsContext.Provider value={{ cards, applyFilter, getPublicaciones, filteredCards, setFav, filters, setFilters, openFilter, selectRadio }}>
            {props.children}
        </CardsContext.Provider>
    );
}

export default CardsContextProvider;