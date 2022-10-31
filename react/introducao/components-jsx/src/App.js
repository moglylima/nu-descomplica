import "./App.css";

function App() {
  function Titulo() {
    return (
      <h1>
        <span>Olá </span>
        <strong>Mundo2</strong>
        !!!
      </h1>
    );
  }

  const TituloEnxuto = () => (
    <h1>
      <span>Olá </span>
      <strong>Mundo2 TituloEnxuto</strong>
      !!!
    </h1>
  );

  function MyBtn() {
    return <button>Meu botão!!!</button>;
  }

  return (
    <div className="App">
      <h1>
        <span>Olá </span>
        <strong>Mundo</strong>
        !!!
      </h1>
      <Titulo />
      <MyBtn />
      <TituloEnxuto />

      <article>
        <h2>Subtítulo</h2>
        <p>Parágrafo</p>
      </article>
      <button type="button">Clique Aqui</button>
      <footer>By Mogleson Lima</footer>
    </div>
  );
}

export { App };
