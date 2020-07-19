import React, { createContext, useState } from 'react';

export const MainContext = createContext();

const MainContextProvider = (props) => {

    const [selectedCard, setCard] = useState(null);

    const setSelectedCard = (card) => {
        setCard(card)
    }

    return (
        <MainContext.Provider value={{ selectedCard, setSelectedCard }}>
            {props.children}
        </MainContext.Provider>
    );
}

export default MainContextProvider;
