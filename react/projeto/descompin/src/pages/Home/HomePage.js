// import ReactDOM from "react-dom";
import { CardComponent } from "../../components/card/CardComponent";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import { ModalComponent } from "../../components/modal/ModalComponent";
import { ModalSavePin } from "../../containers/modalsavepin/ModalSavePin";
import { ModalCreateFolder } from "../../containers/modalcreatefolder/ModalCreateFolder";

import { NotificationAlert } from "../../components/notification/NotificationAlert";

// //Exemplo do uso de portal
// const Test = () => {
//   return ReactDOM.createPortal(
//     // Conteúdo do portal a ser renderizado
//     <h4>Test portal</h4>,
//     // Local onde o portal será renderizado
//     document.body
//   );
// };

export const HomePage = () => {
  return (
    <div>
      {/* <Test /> */}
      <ModalCreateFolder open={false} />
      {/* <ModalSavePin open={true} /> */}

      <NotificationAlert
        message={"Teste de notificação"}
        variant={"success"}
        onClose={() => console.log("Fechou")}
      />

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
