import React from "react";

const Fileira = (props) => {
  return (
    <div>
      {[0, 1, 2, 3].map((pos, index) => (
        <AssentoHook key={index} pos={props.de + pos} />
      ))}
    </div>
  );
};

const AssentoHook = (props) => {
  const [ocupado, setOcupado] = React.useState(false);

  const handleClick = () => {
    setOcupado(true);
  };

  return (
    <button disabled={ocupado} onClick={handleClick}>
      {ocupado ? "x" : props.pos}
    </button>
  );
};

export const AssentosOnibusHook = () => {
  return (
    <div>
      {[1, 5, 9, 13, 17].map((pos, index) => (
        <Fileira key={index} de={pos} />
      ))}
    </div>
  );
};
