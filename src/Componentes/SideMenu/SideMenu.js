import React, { useContext } from 'react';

import Search from './Search';
import OperationType from './OperationType';
import CustomizedTab from '../StyledComponents/CustomizedTab';

import { CardsContext } from '../../Contexts/CardsContext';


function SideMenu() {

    const { cards, applyFilter, setFav, filters, setFilters, openFilter, selectRadio, usedFilters, setAppliedFilters } = useContext(CardsContext);
    console.log(filters)
    return (

        <div className="menu-lateral">
            <div className="side-menu-title" >
                <div>Filtrado actual</div>
                {usedFilters && usedFilters.map(f => <CustomizedTab onclick={setAppliedFilters} target={f} content={f} />)}
            </div>
            <Search
                openFilter={openFilter}
                changeFilterValue={setFilters}
                isOpen={filters.address.isOpen}
                filterValue={filters.address.value}
                search={applyFilter}
                nombre={"Dirección"}
                filtro={"address"}
            />
            <Search
                openFilter={openFilter}
                changeFilterValue={setFilters}
                isOpen={filters.zone.isOpen}
                filterValue={filters.zone.value}
                search={applyFilter}
                nombre={"Barrio"}
                filtro={"zone"}
            />
            <Search
                openFilter={openFilter}
                changeFilterValue={setFilters}
                isOpen={filters.city.isOpen}
                filterValue={filters.city.value}
                search={applyFilter}
                nombre={"Ciudad"}
                filtro={"city"}
            />
            <OperationType
                openFilter={openFilter}
                changeFilterValue={setFilters}
                isOpen={filters.operation_type_id.isOpen}
                filterValue={filters.operation_type_id.value}
                selectRadio={selectRadio}
                filtro={"operation_type_id"}
            />
        </div>

    );
}

export default SideMenu;