import { Voos } from "./components/Voos";
function App() {
  function MeuButton() {
    const handleClick = (e) => {
      e.preventDefault();
      console.log("Hello...");
    };
    return <button onClick={handleClick}>Meu botão</button>;
  }
  return (
    <div className="App">
      <MeuButton />

      <Voos />
    </div>
  );
}

export { App };

// OBS: Se por por ventura se desejar apenas um retorno,
// pode-se usar o operador lógico &&, retornando apenas um valor.
