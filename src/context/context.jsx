import React, { createContext, useState, useEffect, useReducer } from 'react';
import initialState from '../reducer/initialState';
import { reducer } from '../reducer/reducer';

const MyContext = createContext();

const MyProvider = ({ children }) => {
  const localStorageKey = 'myAppContext'; // Clave para guardar en localStorage

  // Función para cargar el estado desde localStorage
  const loadStateFromLocalStorage = () => {
    try {
      const serializedState = localStorage.getItem(localStorageKey);
      if (serializedState === null) {
        return initialState; // No existe en localStorage, usar initialState
      }
      let parsedState = JSON.parse(serializedState);
      let closeRecipe = { ...parsedState, loadedRecipe: [] };
      return closeRecipe;
    } catch (error) {
      console.error("Error al cargar el estado desde localStorage:", error);
      return initialState; // En caso de error, usar initialState
    }
  };

  // Inicializar el estado usando useReducer y la función de carga
  const [state, dispatch] = useReducer(reducer, loadStateFromLocalStorage());

  // Efecto para guardar el estado en localStorage cada vez que cambia
  useEffect(() => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem(localStorageKey, serializedState);
    } catch (error) {
      console.error("Error al guardar el estado en localStorage:", error);
    }
  }, [state]); // Dependencia en 'state' para que se ejecute al cambiar

  return (
    <MyContext.Provider value={[state, dispatch]}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyProvider };