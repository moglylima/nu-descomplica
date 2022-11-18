import { CardComponent } from "../../components/card/CardComponent";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import { ModalComponent } from "../../components/modal/ModalComponent";
import { ModalSavePin } from "../../containers/modalsavepin/ModalSavePin";
import { ModalCreateFolder } from "../../containers/modalcreatefolder/ModalCreateFolder";

export const HomePage = () => {
  return (
    <div>
      <ModalCreateFolder open={true} />
      {/* <ModalSavePin open={true} /> */}

      {/* <ModalComponent
        title="Salvar"
        open={true}
        // Configurações dos botões do modal
        controls={[
          {
            label: "Salvar",
            variant: "primary",
            onClick: () => {
              console.log("Salvar");
            },
          },
          {
            label: "Cancelar",
            variant: "secondary",
            onClick: () => {
              console.log("Cancelar");
            },
          },
        ]}
      ></ModalComponent> */}

      <Container fluid>
        <Row>
          <Col xs={12} md={3}>
            <CardComponent
              title="Matematica"
              image="https://picsum.photos/280/300?50"
              total={0}
            />
          </Col>
          <Col xs={12} md={3}>
            <CardComponent
              title="Fisica"
              image="https://picsum.photos/280/300?23"
              total={0}
            />
          </Col>
          <Col xs={12} md={3}>
            <CardComponent
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
