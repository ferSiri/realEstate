import React from 'react';
import CardsContextProvider from './Contexts/CardsContext';

import Main from './Componentes/Main';

function App() {

    return (
        <CardsContextProvider>
            <div>
                <Main />
            </div>
        </CardsContextProvider>
    );

}

export default App;
