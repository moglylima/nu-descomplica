//Como estamos exportando o que está presente no contexto, aqui não usamos o useContext
//import { useContext } from "react";
import { useThemeContextPlus, useSettingsContext } from "../App";

export const ExUseContextPlus = () => {
  //Por meio do useThemeContextPlus, o contexto é consumido diretamente no componente

  const value = useThemeContextPlus();
  const { valorPass } = useSettingsContext();

  return (
    <div>
      <h1>Usando useContextPlus</h1>
      <button onClick={() => value.setFont("Arial")}>Arial</button>
      <button onClick={() => value.setFont("Fira COde")}>Fira</button>
      <button onClick={() => value.setFont("Ubuntu")}>Ubuntu</button>

      <h1>Valor passado: {valorPass}</h1>
    </div>
  );
};
