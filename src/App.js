import React from 'react';
import FilterContextProvider from './Contexts/FilterContext';
import CardsContextProvider from './Contexts/CardsContext';

import Main from './Componentes/Main';

function App() {

    return (
        <FilterContextProvider>
            <CardsContextProvider>
                <div>
                    <Main />
                </div>
            </CardsContextProvider>
        </FilterContextProvider>
    );

}

export default App;
