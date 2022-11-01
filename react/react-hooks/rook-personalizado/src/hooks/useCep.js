import { useEffect, useState } from "react";

export const useCep = (cep) => {
  const [endereco, setEndereco] = useState({});

  const fetchCEP = (cep) => {
    fetch(`https://viacep.com.br/ws/${cep}/json/`).then((response) =>
      response.json().then((data) => (console.log(data), setEndereco(data)))
    );
  };

  useEffect(() => {
    fetchCEP(cep);
  }, [cep]);

  return endereco;
};
