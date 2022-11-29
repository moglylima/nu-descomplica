import { CardComponent } from "../../components/card/CardComponent";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import { ModalComponent } from "../../components/modal/ModalComponent";
import { ModalSavePin } from "../../containers/modalsavepin/ModalSavePin";
import { ModalCreateFolder } from "../../containers/modalcreatefolder/ModalCreateFolder";

// Aqui está sendo importado contextApp, que é o contexto criado no arquivo AppContext.js
//import { ContextApp } from "../../store/AppContext";

// Aqui está sendo importado useAppContext, que é o hook que permite que você use o contexto em qualquer lugar do seu app
import { useAppContext } from "../../store/AppContext";

export const HomePage = () => {
  const { state, dispatch } = useAppContext();
  return (
    <div>
      <ModalCreateFolder open={false} />

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
