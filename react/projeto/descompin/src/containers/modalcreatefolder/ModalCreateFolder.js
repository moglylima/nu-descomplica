import { useState } from "react";
import Form from "react-bootstrap/Form";
import { ModalComponent } from "../../components/modal/ModalComponent";

export const ModalCreateFolder = ({ open }) => {
  const [folderName, setFolderName] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Fez submit ", folderName);
  };

  const handleChange = (event) => {
    setFolderName(event.target.value);
  };

  return (
    <ModalComponent
      open={open}
      title="Criar Pasta"
      controls={[
        {
          label: "Criar e Salvar",
          loadingLabel: "Criando",
          variant: "secondary",
          loading: false,
          type: "submit",
          form: "form-create-folder",
        },
      ]}
    >
      <Form onSubmit={handleSubmit} id="form-create-folder">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nome da pasta</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ex: Matemática"
            value={folderName}
            onChange={handleChange}
          />
        </Form.Group>
      </Form>
    </ModalComponent>
  );
};
