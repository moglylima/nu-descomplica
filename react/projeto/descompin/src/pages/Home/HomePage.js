import React, { useEffect } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import { ModalSavePin } from "../../containers/modalsavepin/ModalSavePin";
import { ModalCreateFolder } from "../../containers/modalcreatefolder/ModalCreateFolder";
import { CardContainer } from "../../containers/cardcontainer/CardContainer";
import { useAppContext } from "../../store/AppContext";
import { saveFolderSuccessType } from "../../store/types";
import { NotificationAlert } from "../../components/notification/NotificationAlert";
import { fetchFoldersAction, fetchPinsAction } from "../../store/actions";

const pinsData = [
  {
    id: "123",
    title: "Matematica",
    image: "https://picsum.photos/280/300?50",
    total: 0,
  },
  {
    id: "124",
    title: "Portugues",
    image: "https://picsum.photos/285/300?50",
    total: 0,
  },
  {
    id: "125",
    title: "Geografia",
    image: "https://picsum.photos/281/300?50",
    total: 0,
  },
];

export const HomePage = () => {
  const { state, dispatch } = useAppContext();
  const [showFeedBack, setShowFeedBack] = React.useState(false);

  const pinsNormalized = state.pins.map((pin) => {
    return {
      ...pin,
      total: state.folders.filter((folder) => {
        return folder.pins.includes(pin.id);
      }).length,
    };
  });

  useEffect(() => {
    fetchPinsAction(dispatch);
  }, []);

  useEffect(() => {
    if (state.type === saveFolderSuccessType) {
      setShowFeedBack(true);
    }
  }, [state.type]);

  return (
    <div>
      <ModalSavePin open={state.mode === "savePin"} />
      <ModalCreateFolder open={state.mode === "createFolder"} />

      {showFeedBack && (
        <NotificationAlert
          message={"Pasta criada com sucesso!"}
          onClose={() => setShowFeedBack(false)}
        />
      )}

      <Container fluid>
        <Row>
          {pinsNormalized.map((pin) => (
            <Col xs={12} md={3} key={pin.id}>
              <CardContainer {...pin} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};
