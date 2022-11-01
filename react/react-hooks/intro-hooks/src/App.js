import "./App.css";
import { AssentosOnibus } from "./components/AssentosOnibusClass";
import { AssentosOnibusHook } from "./components/AssentosOnibusHook";

function App() {
  return (
    <div className="App">
      <h1>Usando Class</h1>
      <AssentosOnibus />

      <h1>Usando Hooks</h1>
      <AssentosOnibusHook />
    </div>
  );
}

export default App;
