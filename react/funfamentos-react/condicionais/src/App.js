import "./App.css";

function App() {
  //expressão ternária
  //const deMaior = idade >= 18 ? "Maior de idade" : "Menor de idade";

  //Usanso component
  function PessoaDeMaior(props) {
    return (
      <section>
        Você é {props.idade >= 18 ? <PessoaMaior /> : "Menor de idade"}
      </section>
    );
  }

  function PessoaMaior() {
    return <strong>Maior de idade</strong>;
  }

  return (
    <div className="App">
      <PessoaDeMaior idade={23} />
      <PessoaDeMaior idade={13} />
    </div>
  );
}

export { App };

// OBS: Se por por ventura se desejar apenas um retorno,
// pode-se usar o operador lógico &&, retornando apenas um valor.
