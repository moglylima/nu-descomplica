import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { CardComponent } from "../../components/card/CardComponent";
import { ModalComponent } from "../../components/modal/ModalComponent";
import { ModalSavePin } from "../../containers/modalsavepin/ModalSavePin";
import { ModalCreateFolder } from "../../containers/modalcreatefolder/ModalCreateFolder";
import { CardContainer } from "../../containers/cardcontainer/CardContainer";
import { useAppContext } from "../../store/AppContext";
import { saveFolderSuccessType } from "../../store/types";
import { NotificationAlert } from "../../components/notification/NotificationAlert";

export const HomePage = () => {
  const { state, dispatch } = useAppContext();
  return (
    <div>
      <ModalSavePin open={state.mode === "savePin"} />
      <ModalCreateFolder open={state.mode === "createFolder"} />

      {state.type === saveFolderSuccessType && (
        <NotificationAlert
          message={"Pasta criada com sucesso!"}
          onClose={() => console.log("Fechou a notificação!")}
        />
      )}

      <Container fluid>
        <Row>
          <Col xs={12} md={3}>
            <CardContainer
              title="Matematica"
              image="https://picsum.photos/280/300?50"
              total={0}
            />
          </Col>
          <Col xs={12} md={3}>
            <CardContainer
              title="Fisica"
              image="https://picsum.photos/280/300?23"
              total={0}
            />
          </Col>
          <Col xs={12} md={3}>
            <CardContainer
              title="Inglês"
              image="https://picsum.photos/280/300?10"
              total={0}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
