import React, { useContext } from 'react';

function MenuTitle(props) {

    return (
        <div className="menu-title" onClick={() => props.openFilter(props.filtro)}>
            <p>{props.titulo}</p>
            <span
                className={props.isOpen ? "fas fa-chevron-up" : "fas fa-chevron-down"}>
            </span>
        </div>
    );
}

export default MenuTitle;