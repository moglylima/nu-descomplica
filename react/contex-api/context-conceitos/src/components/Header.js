import { ThemeContext } from "../App";

export const Header = () => {
  return (
    // Context.Consumer é o componente que vai consumir o contexto
    <ThemeContext.Consumer>
      {/* O consumer espera sempre uma função JS!!! */}
      {/*  O valor do contexto é passado como parâmetro para a função de renderização */}
      {(value) => (
        <header
          style={{ backgroundColor: value.color, fontFamily: value.font }}
        >
          <h1>Context API</h1>
          <h4>Header Context API</h4>
        </header>
      )}
    </ThemeContext.Consumer>
  );
};
