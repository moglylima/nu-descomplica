import "./App.css";
import { createContext, useContext, useState } from "react";
import { Header } from "./components/Header";
import { RenderProps } from "./components/RenderProps";
import { Fonts } from "./components/Fonts";
import { ExUseContext } from "./components/ExUseContext";
import { ExUseContextPlus } from "./components/ExUseContextPlus";

export const ThemeContext = createContext({});

//Indo além no uso do Context API
//Usando pegando apenas a constante, sempre precisaremos criar um OBJETO(pode resultar em gargalo de performance)
// export const useThemeContext = useContext(ThemeContext);
// Usando uma função para pegar o contexto, não precisamos criar um objeto, apenas usaremos o valores diretamente
//Transformando o contexto em um hook
export const useThemeContextPlus = () => useContext(ThemeContext);

// Apenas mais um componente para exemplificar o uso do Context API
const settingsContext = createContext({});
export const useSettingsContext = () => useContext(settingsContext);

function App() {
  const [font, setFont] = useState("Arial");
  return (
    <settingsContext.Provider value={{ valorPass: "isso aqui..." }}>
      {/* // Context.Provider é o componente que vai fornecer o contexto para os
      componentes filhos */}
      <ThemeContext.Provider value={{ color: "blue", font, setFont }}>
        <div className="App">
          <Header />
          <RenderProps />
          <Fonts />
          <ExUseContext />
          <ExUseContextPlus />
        </div>
      </ThemeContext.Provider>
    </settingsContext.Provider>
  );
}

export default App;
