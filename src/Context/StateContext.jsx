import React, {createContext, useContext} from 'react';

export const contextList = createContext();

export const StateContextProvider = ({children}) => {
    const data={};
    return(
        <contextList.Provider value={data}>
            {children}
        </contextList.Provider>
    )
}
export const createcontextCustom = () => useContext(contextList);