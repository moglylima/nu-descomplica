import "./App.css";
import { useEffect, useState } from "react";
function App() {
  const [disabled, setDisabled] = useState(false);

  function handleClick() {
    disabled ? setDisabled(false) : setDisabled(true);
  }

  useEffect(() => {
    console.log("Renderizou - nasceu", disabled);
  }, []);

  useEffect(() => {
    console.log("Disabled tualizou", disabled);
  }, [disabled]);
  return (
    <div className="App">
      <h1>Mais Hooks</h1>
      <button onClick={handleClick}>Enable/Disabled</button>
    </div>
  );
}

export default App;
