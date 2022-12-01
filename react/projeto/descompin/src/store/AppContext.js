import { createContext, useContext, useReducer } from "react";
import { reducer } from "./reducer";

// Cria o contexto do app, é preciso exportar para que possa ser usado em outros lugares
export const Context = createContext({});

// useContext é um hook que permite que você use o contexto em qualquer lugar do seu app
export const useAppContext = () => useContext(Context);

export const AppContext = ({ children, initialState }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};
