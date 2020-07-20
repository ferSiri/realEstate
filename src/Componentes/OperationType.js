import React, { useContext } from 'react';
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
                    selectRadio={props.selectRadio}
                    title={"Todos"}
                />
                <CustomizedRadioButton
                    checked={props.filterValue == 1}
                    value={1}
                    selectRadio={props.selectRadio}
                    title={"Alquiler"}
                />
                <CustomizedRadioButton
                    checked={props.filterValue == 2}
                    value={2}
                    selectRadio={props.selectRadio}
                    title={"Venta"}
                />
                <CustomizedRadioButton
                    checked={props.filterValue == 3}
                    value={3}
                    selectRadio={props.selectRadio}
                    title={"Temporal"}
                />

            </div>}

        </div>

    );
}

export default Search;