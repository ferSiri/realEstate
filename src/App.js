import React from 'react';
import FilterContextProvider from './Contexts/FilterContext';

import Main from './Componentes/Main';

function App() {

    return (
        <FilterContextProvider>
            <div>
                <Main />
            </div>
        </FilterContextProvider>
    );

}

export default App;
