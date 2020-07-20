import React, { useContext } from 'react';
import { FilterContext } from '../Contexts/FilterContext';
import MenuTitle from './MenuTitle';
import CustomizedRadioButton from './StyledComponents/CustomizedRadioButton';


function Search(props) {

    return (

        <div className="search-bar">

            <MenuTitle filtro={props.filtro} titulo={"Tipo de Operación"} isOpen={props.isOpen} openFilter={props.openFilter} />

            {props.isOpen && <div>
                <CustomizedRadioButton
                    checked={props.filterValue == 0}
                    value={0}
                />

            </div>}

        </div>

    );
}

export default Search;