import { ThemeContext } from "../App";
export const Fonts = () => {
  return (
    <ThemeContext.Consumer>
      {(value) => (
        <div>
          <button onClick={() => value.setFont("Arial")}>Arial</button>
          <button onClick={() => value.setFont("Fira COde")}>Fira</button>
          <button onClick={() => value.setFont("Ubuntu")}>Ubuntu</button>
        </div>
      )}
    </ThemeContext.Consumer>
  );
};
