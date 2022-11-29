import { createContext, useContext, useReducer } from "react";

// Cria o contexto do app, é preciso exportar para que possa ser usado em outros lugares
export const context = createContext({});

// useContext é um hook que permite que você use o contexto em qualquer lugar do seu app
export const useAppContext = () => useContext(context);

function reducer(state, action) {
  return state;
}

export const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { name: "descomPin" });
  return (
    <context.Provider value={{ state, dispatch }}>{children}</context.Provider>
  );
};
