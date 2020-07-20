import React, { useContext } from 'react';
import MenuTitle from '../MenuTitle';
import CustomizedSearchButton from '../StyledComponents/CustomizedSearchButton';


function Search(props) {

    return (

        <div className="search-bar">

            <MenuTitle filtro={props.filtro} titulo={props.nombre} isOpen={props.isOpen} openFilter={props.openFilter} />

            {props.isOpen && <div className="inputContainer">
                <input className="input-form" placeholder={"Buscar por " + props.nombre.toLowerCase()} value={props.filterValue} onChange={(e) => props.changeFilterValue(props.filtro, e.target.value)} type="text"></input>
                <CustomizedSearchButton target={props.filtro} disabled={props.filterValue == ""} onclick={props.search} />
            </div>}

        </div>

    );
}

export default Search;