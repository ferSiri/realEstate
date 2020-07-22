import React, { useContext } from 'react';

import Helper from '../../Helpers';

import Search from './Search';
import OperationType from './OperationType';
import CustomizedTab from '../StyledComponents/CustomizedTab';

import { CardsContext } from '../../Contexts/CardsContext';


function SideMenu() {

    const { applyFilter,
        filters,
        setFilters,
        openFilter,
        selectRadio,
        usedFilters,
        setAppliedFilters
    } = useContext(CardsContext);

    return (

        <div className="menu-lateral">
            <div className="side-menu-title" >
                <div>Filtrado actual</div>
                <div className="tag-container">
                    {usedFilters && usedFilters.map(f => <CustomizedTab
                        onclick={setAppliedFilters}
                        target={f}
                        content={Helper.GetNameByFilter(f)}
                    />)}
                </div>
            </div>

            {!usedFilters.some(u => u == "address") && <Search
                openFilter={openFilter}
                changeFilterValue={setFilters}
                isOpen={filters.address.isOpen}
                filterValue={filters.address.value}
                search={applyFilter}
                nombre={"Dirección"}
                filtro={"address"}
            />}
            {!usedFilters.some(u => u == "zone") && <Search
                openFilter={openFilter}
                changeFilterValue={setFilters}
                isOpen={filters.zone.isOpen}
                filterValue={filters.zone.value}
                search={applyFilter}
                nombre={"Barrio"}
                filtro={"zone"}
            />}
            {!usedFilters.some(u => u == "city") && <Search
                openFilter={openFilter}
                changeFilterValue={setFilters}
                isOpen={filters.city.isOpen}
                filterValue={filters.city.value}
                search={applyFilter}
                nombre={"Ciudad"}
                filtro={"city"}
            />}
            {<OperationType
                openFilter={openFilter}
                changeFilterValue={setFilters}
                isOpen={filters.operation_type_id.isOpen}
                filterValue={filters.operation_type_id.value}
                selectRadio={selectRadio}
                filtro={"operation_type_id"}
            />}
        </div>

    );
}

export default SideMenu;