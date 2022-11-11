import { useState, useRef } from "react";

export const FormularioNotControlados = () => {
  const [fieldValues, setField] = useState({
    nome: "",
    cidade: "",
    estado: "",
  });

  const nomeRef = useRef(null);

  const handleChange = (event) => {
    console.log(event.target.name, event.target.value);
    setField({ ...fieldValues, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(nomeRef.current.value);
  };

  return (
    <div>
      <h1>Formularios Controlados</h1>
      <form onSubmit={handleSubmit} action="https://descomplica.com.br/">
        <input
          type="text"
          name="nome"
          ref={nomeRef}
          // value={fieldValues.name}
          // onChange={handleChange}
        />
        <input
          type="text"
          name="cidade"
          // value={fieldValues.cidade}
          // onChange={handleChange}
        />
        <input
          type="text"
          name="estado"
          // value={fieldValues.estado}
          // onChange={handleChange}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};
