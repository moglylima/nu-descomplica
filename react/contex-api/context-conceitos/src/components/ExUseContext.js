import { useContext } from "react";
import { ThemeContext } from "../App";

export const ExUseContext = () => {
  // Por meio do use context, o contexto é consumido diretamente no componente
  // sem a necessidade de utilizar o componente Context.Consumer
  const { setFont } = useContext(ThemeContext);
  return (
    <div>
      <h1>Usando useContext</h1>
      <button onClick={() => setFont("Arial")}>Arial</button>
      <button onClick={() => setFont("Fira COde")}>Fira</button>
      <button onClick={() => setFont("Ubuntu")}>Ubuntu</button>
    </div>
  );
};
