import { useState } from "react";
import Form from "react-bootstrap/Form";
import { ModalComponent } from "../../components/modal/ModalComponent";
import { closeModalAction, saveFolderAction } from "../../store/actions";
import { useAppContext } from "../../store/AppContext";
import { saveFolderInitType } from "../../store/types";

export const ModalCreateFolder = ({ open }) => {
  const { state, dispatch } = useAppContext();

  const [folderName, setFolderName] = useState("");

  const handleClose = () => {
    console.log("Clicou no botão fechar!");
    dispatch(closeModalAction());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Fez submit ", folderName);
    console.log("state.type ", state.type, saveFolderInitType);
    saveFolderAction(dispatch, folderName);
  };

  const handleChange = (e) => {
    setFolderName(e.target.value);
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
          loading: state.type === saveFolderInitType,
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
