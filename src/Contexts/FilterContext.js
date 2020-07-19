import React, { createContext, useState } from 'react';

export const FilterContext = createContext();



const FilterContextProvider = (props) => {

    const [filters, setFilter] = useState({
        direccion: {
            value: "",
            isOpen: false
        },
        barrio: {
            value: "",
            isOpen: false
        },
        ciudad: {
            value: "",
            isOpen: false
        },
        tipoOperacion: {
            value: null,
            isOpen: false
        }
    });

    const setFilters = (filter, value) => {
        setFilter({
            ...filters,
            [filter]: {
                ...filters[filter],
                value
            }
        })
    };

    const openFilter = (filter) => {
        setFilter({
            ...filters,
            [filter]: {
                ...filters[filter],
                isOpen: !filters[filter].isOpen
            }
        })
    };

    return (
        <FilterContext.Provider value={{ filters, setFilters, openFilter }}>
            {props.children}
        </FilterContext.Provider>
    );
}

export default FilterContextProvider;
