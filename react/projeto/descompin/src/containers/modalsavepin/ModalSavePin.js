import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ListGroup from "react-bootstrap/ListGroup";
import { ModalComponent } from "../../components/modal/ModalComponent";
import { ButtonSpinner } from "../../components/button/ButtonSpinner";
import { useAppContext } from "../../store/AppContext";
import {
  closeModalsAction,
  fetchFoldersAction,
  openModalCreateFolderAction,
  savePinInFolderAction,
} from "../../store/actions";
import { useEffect, useState } from "react";

export const ModalSavePin = ({ open }) => {
  const { state, dispatch } = useAppContext();
  const [itensLoading, setItensLoading] = useState([]);

  const handleClose = () => {
    console.log("Clicou no botão fechar!");
    dispatch(closeModalsAction());
  };

  const handleClickCreateFolder = () => {
    console.log("Clicou no botão criar pasta!");
    dispatch(openModalCreateFolderAction());
  };

  const handleClickSavePin = async (folderId) => {
    console.log("Clicou no botão...Folder ID: ", folderId, state.activePinId);

    //loading true
    setItensLoading((prevState) => ({ ...prevState, [folderId]: true }));
    await savePinInFolderAction(dispatch, state.activePinId, folderId);
    //loading false
    setItensLoading((prevState) => ({ ...prevState, [folderId]: false }));
  };

  const folderNormalized = state.folders.map((folder) => {
    return {
      ...folder,
      saved: folder.pins.includes(state.activePinId),
    };
  });

  useEffect(() => {
    console.log("Listando folders!");
    fetchFoldersAction(dispatch);
  }, []);
  // useEffect(() => {
  //   console.log(state);
  // }, [state]);

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
        {folderNormalized.map((folder, folderIndex) => (
          <ListGroup.Item key={folderIndex}>
            <Row>
              <Col xs={8}>{folder.name}</Col>
              <Col xs={4} className="text-end">
                <ButtonSpinner
                  label={folder.saved ? "Salvo" : "Salvar"}
                  loadingLabel="Salvando"
                  onClick={() => handleClickSavePin(folder.id)}
                  variant={folder.saved ? "secondary" : "primary"}
                  disabled={folder.saved}
                  loading={itensLoading[folder.id]}
                />
              </Col>
            </Row>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </ModalComponent>
  );
};
