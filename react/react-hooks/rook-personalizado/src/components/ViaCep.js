import { useCep } from "../hooks/useCep";

export const ViaCep = () => {
  const endereco = useCep("01001000");
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
