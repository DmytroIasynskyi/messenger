import {createContext} from "react";
import React from 'react';


const MessengerContext = createContext();

function Provider({ children }) {




    const values = {

    }

    return (
        <MessengerContext.Provider value={values}>
            {children}
        </MessengerContext.Provider>
    )
}

export { Provider };
export default MessengerContext;