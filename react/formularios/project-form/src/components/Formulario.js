import { useState } from "react";

export const Formulario = () => {
  const [fieldValues, setField] = useState({
    nome: "",
    cidade: "",
    estado: "",
  });

  const handleChange = (event) => {
    console.log(event.target.name, event.target.value);
    setField({ ...fieldValues, [event.target.name]: event.target.value });
  };
  return (
    <div>
      <h1>Formularios Controlados</h1>
      <form method="">
        <input
          type="text"
          name="nome"
          value={fieldValues.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="cidade"
          value={fieldValues.cidade}
          onChange={handleChange}
        />
        <input
          type="text"
          name="estado"
          value={fieldValues.estado}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};
