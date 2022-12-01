import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ListGroup from "react-bootstrap/ListGroup";
import { ModalComponent } from "../../components/modal/ModalComponent";
import { ButtonSpinner } from "../../components/button/ButtonSpinner";
import { useAppContext } from "../../store/AppContext";
import {
  closeModalAction,
  fetchFoldersAction,
  openModalCreateFolderAction,
} from "../../store/actions";
import { useEffect } from "react";

export const ModalSavePin = ({ open }) => {
  const { state, dispatch } = useAppContext();
  const handleClose = () => {
    console.log("Clicou no botão fechar!");
    dispatch(closeModalAction());
  };

  const handleClickCreateFolder = () => {
    console.log("Clicou no botão criar pasta!");
    dispatch(openModalCreateFolderAction());
  };
  useEffect(() => {
    console.log("Listando folders!");
    fetchFoldersAction(dispatch);
  }, []);
  return (
    <ModalComponent
      title="Salvar Pin"
      open={open}
      onHide={handleClose}
      controls={[
        {
          label: "Criar Pasta",
          variant: "secondary",
          onClick: handleClickCreateFolder,
        },
      ]}
    >
      <ListGroup variant="flush">
        {state.folders.map((folder, folderIndex) => (
          <ListGroup.Item key={folderIndex}>
            <Row>
              <Col xs={8}>{folder.name}</Col>
              <Col xs={4} className="text-end">
                <ButtonSpinner label="Salvar" loadingLabel="Salvando" />
              </Col>
            </Row>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </ModalComponent>
  );
};
