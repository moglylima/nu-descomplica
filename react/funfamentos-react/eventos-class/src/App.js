import React from "react";
import { Voos } from "./components/Voos";
function App() {
  class MeuButton extends React.Component {
    // const handleClick = (e) => {
    //   e.preventDefault();
    //   console.log("Hello...");
    // };

    handleClick = (e) => {
      e.preventDefault();
      this.imprimir();
      console.log("Hello...", e);
      console.log(this);
    };

    imprimir() {
      console.log("Hello...imoprimir");
    }

    render() {
      return (
        // <button onClick={this.handleClick.bind(this)}>
        <button onClick={(e) => this.handleClick(e)}>
          Meu botão label {this.props.label}
        </button>
      );
    }
  }
  return (
    <div className="App">
      <MeuButton label="sou label" />

      <Voos />
    </div>
  );
}

export { App };

// OBS: Se por por ventura se desejar apenas um retorno,
// pode-se usar o operador lógico &&, retornando apenas um valor.
