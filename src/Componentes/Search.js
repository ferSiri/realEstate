import React, { useContext } from 'react';
import MenuTitle from './MenuTitle';


function Search(props) {

    return (

        <div className="search-bar">

            <MenuTitle filtro={props.filtro} titulo={props.nombre} isOpen={props.isOpen} openFilter={props.openFilter} />

            {props.isOpen && <div>
                <input value={props.filterValue} onChange={(e) => props.changeFilterValue(props.filtro, e.target.value)} type="text"></input>
                <span onClick={() => props.search(props.filtro, props.filterValue)} className="fas fa-search"></span>
            </div>}

        </div>

    );
}

export default Search;