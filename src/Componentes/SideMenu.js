import React, { useContext } from 'react';

import Search from './Search';

import { FilterContext } from '../Contexts/FilterContext';


function SideMenu() {

    const { filters, setFilters, openFilter } = useContext(FilterContext);

    console.log("works")
    return (

        <div className="menu-lateral">
            <div >Filtrado actual</div>
            <Search
                openFilter={openFilter}
                changeFilterValue={setFilters}
                isOpen={filters.direccion.isOpen}
                filterValue={filters.direccion.value}
                nombre={"Dirección"}
                filtro={"direccion"}
            />
            <Search
                openFilter={openFilter}
                changeFilterValue={setFilters}
                isOpen={filters.barrio.isOpen}
                filterValue={filters.barrio.value}
                nombre={"Barrio"}
                filtro={"barrio"}
            />
            <Search
                openFilter={openFilter}
                changeFilterValue={setFilters}
                isOpen={filters.ciudad.isOpen}
                filterValue={filters.ciudad.value}
                nombre={"Ciudad"}
                filtro={"ciudad"}
            />
        </div>

    );
}

export default SideMenu;