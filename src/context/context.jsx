import React, { createContext, useState, useReducer } from 'react';
import initialState from '../reducer/initialState';
import { reducer } from '../reducer/reducer';

const MyContext = createContext();

const MyProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <MyContext.Provider value={[state, dispatch]}>
            {children}
        </MyContext.Provider>
    );
};

export { MyContext, MyProvider };