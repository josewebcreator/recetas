import React, { createContext, useState } from 'react';

const MyContext = createContext();

const MyProvider = ({ children }) => {
    const [state, setState] = useState(null);

    return (
        <MyContext.Provider value={{ state, setState }}>
            {children}
        </MyContext.Provider>
    );
};

export { MyContext, MyProvider };