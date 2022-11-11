import "./App.css";
import { Formulario } from "./components/Formulario";
import { FormularioNotControlados } from "./components/FormularioNotControlados";

function App() {
  return (
    <div className="App">
      <Formulario />
      <FormularioNotControlados />
    </div>
  );
}

export default App;
