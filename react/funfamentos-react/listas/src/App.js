function App() {
  function Item({ label }) {
    return <li>{label}</li>;
  }

  const Lista = () => {
    const itens = ["item 1", "item 2", "item 3"];
    return (
      <ul>
        {itens.map((item, index) => (
          <Item key={index} label={item} />
        ))}
      </ul>
    );
  };
  return (
    <div className="App">
      <Lista />
    </div>
  );
}

export { App };

// OBS: Se por por ventura se desejar apenas um retorno,
// pode-se usar o operador lógico &&, retornando apenas um valor.
