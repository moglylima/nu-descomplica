import { useEffect, useState } from "react";

export const ViaCep = () => {
  const [endereco, setEndereco] = useState({});

  const fetchCEP = (cep) => {
    fetch(`https://viacep.com.br/ws/${cep}/json/`).then((response) =>
      response.json().then((data) => (console.log(data), setEndereco(data)))
    );
  };

  useEffect(() => {
    console.log("Renderizou - nasceu");
    fetchCEP("01001000");
  }, []);
  return (
    <div>
      <h1>Via Cep</h1>
      <table>
        <tbody>
          <tr>
            <td>Bairro: </td>
            <td>{endereco.bairro}</td>
          </tr>
          <tr>
            <td>Complemento: </td>
            <td>{endereco.complemento}</td>
          </tr>
          <tr>
            <td>UF: </td>
            <td>{endereco.uf}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
