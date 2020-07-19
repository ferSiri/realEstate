import React, { useContext } from 'react';

function MenuTitle(props) {

    return (
        <div className="menu-title">
            <p>{props.titulo}</p>
            <span onClick={() => props.openFilter(props.filtro)} className={props.isOpen ? "fas fa-chevron-up" : "fas fa-chevron-down"}></span>
        </div>
    );
}

export default MenuTitle;