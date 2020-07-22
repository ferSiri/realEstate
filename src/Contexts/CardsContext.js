import React, { createContext, useState } from 'react';

export const CardsContext = createContext();



const CardsContextProvider = (props) => {


    const [cards, setCards] = useState([]);

    const [filteredCards, setFilteredCards] = useState([]);

    const [usedFilters, setUsedFilters] = useState([]);

    const [currentCardPics, setCurrentCardPic] = useState({});

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


    //FUNCIÓN PARA LA SELECCIÓN DE LA FOTO 
    const selectCurrentCardPic = (card, picNumber) => {
        let objAux = { ...currentCardPics };
        objAux["c" + card] = picNumber;
        setCurrentCardPic(objAux)
    }



    //FUNCIÓN PARA SETEAR EL VALOR DE LOS FILTROS
    const setFilters = (filter, value) => {
        setFilter({
            ...filters,
            [filter]: {
                ...filters[filter],
                value: value.toLowerCase()
            }
        })
    };

    //FUNCIÓN PARA DESPLEGAR O COLAPSAR LA SECCIÓN DE FILTRO CORRESPONDIENTE
    const openFilter = (filter) => {
        setFilter({
            ...filters,
            [filter]: {
                ...filters[filter],
                isOpen: !filters[filter].isOpen
            }
        })
    };

    //FUNCIÓN PARA APLICAR FILTROS
    const applyFilter = (filter) => {
        //si existen filtros se aplican
        setFilteredCards(cards.filter(c =>
            c.posting_location.address.toLowerCase().includes(filters.address.value) &&
            c.posting_location.zone.toLowerCase().includes(filters.zone.value) &&
            c.posting_location.city.toLowerCase().includes(filters.city.value) &&
            (filters.operation_type_id.value == 0 || c.operation_type.operation_type_id == filters.operation_type_id.value)
        ))
        //se agrega el filtro aplicado al store de filtros utilizados

        setUsedFilters(!usedFilters.some(f => f == filter) ? [...usedFilters, filter] : usedFilters)

    };

    //FUNCIÓN PARA OBTENER LAS PUBLICACIONES
    const getPublicaciones = (publicaciones) => {
        let arrAux = [...publicaciones.filter(p => p.publication_plan == "SUPERHIGHLIGHTED"), ...publicaciones.filter(p => p.publication_plan == "HIGHLIGHTED"), ...publicaciones.filter(p => p.publication_plan == "SIMPLE")]
        setCards(arrAux);
        setFilteredCards(arrAux);
        let objAux = { ...currentCardPics };
        arrAux.map(c => {
            objAux["c" + c.posting_id] = c.posting_id + "-1";
        })

        setCurrentCardPic(objAux)
    }

    //FUNCIÓN PARA MARCAR PUBLICACIÓN COMO FAVORITA
    const setFav = (postingId) => {
        setCards(cards.map(c => {
            if (c.posting_id == postingId) {
                c.favorito = !c.favorito;
            }
            return c
        }))

        localStorage.setItem("publicaciones", JSON.stringify(cards));
    }

    //FUNCIÓN PARA MARCAR PUBLICACIÓN COMO FAVORITA
    const setContact = (postingId) => {
        setCards(cards.map(c => {
            if (c.posting_id == postingId) {
                c.contactado = true;
            }
            return c
        }))

        localStorage.setItem("publicaciones", JSON.stringify(cards));
    }

    //FUNCIÓN PARA SELECCIONAR UN TIPO DE OPERACIÓN Y APLICAR EL FILTRO
    const selectRadio = (radioId) => {

        setFilter({
            ...filters,
            operation_type_id: {
                ...filters.operation_type_id,
                value: radioId
            }
        })

        setFilteredCards(cards.filter(c =>
            c.posting_location.address.toLowerCase().includes(filters.address.value) &&
            c.posting_location.zone.toLowerCase().includes(filters.zone.value) &&
            c.posting_location.city.toLowerCase().includes(filters.city.value) &&
            (radioId == 0 || c.operation_type.operation_type_id == radioId)
        ))
    }

    const setAppliedFilters = (filter) => {
        //se elimina el filtro y se vuelve a filtrar con los filtros activos

        setUsedFilters(usedFilters.filter(f => f != filter))

        let objAux = { ...filters }
        objAux[filter].value = ""

        setFilter(objAux)

        setFilteredCards(cards.filter(c =>
            c.posting_location.address.toLowerCase().includes(filters.address.value) &&
            c.posting_location.zone.toLowerCase().includes(filters.zone.value) &&
            c.posting_location.city.toLowerCase().includes(filters.city.value) &&
            (filters.operation_type_id.value == 0 || c.operation_type.operation_type_id == filters.operation_type_id.value)
        ))

    };

    return (
        <CardsContext.Provider value={{ cards, applyFilter, getPublicaciones, filteredCards, setFav, filters, setFilters, openFilter, selectRadio, usedFilters, setAppliedFilters, selectCurrentCardPic, currentCardPics, setContact }}>
            {props.children}
        </CardsContext.Provider>
    );
}

export default CardsContextProvider;