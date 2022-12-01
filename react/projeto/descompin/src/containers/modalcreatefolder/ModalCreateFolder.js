import { useState } from "react";
import Form from "react-bootstrap/Form";
import { ModalComponent } from "../../components/modal/ModalComponent";
import { closeModalAction, saveFolderAction } from "../../store/actions";
import { useAppContext } from "../../store/AppContext";

export const ModalCreateFolder = ({ open }) => {
  const { state, dispatch } = useAppContext();
  const [folderName, setFolderName] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Fez submit ", folderName);
    saveFolderAction(dispatch, folderName);
  };

  const handleChange = (event) => {
    setFolderName(event.target.value);
  };

  const handleClose = () => {
    console.log("Clicou no botão fechar!");
    dispatch(closeModalAction());
  };

  return (
    <ModalComponent
      open={open}
      title="Criar Pasta"
      onHide={handleClose}
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
