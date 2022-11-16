import { Col, Container, Row } from "react-bootstrap";
import { CardComponent } from "../../components/card/CardComponent";
import { ModalCreateFolder } from "../../components/containers/modalsavepin/madalcreatefolder/ModalCreateFolder";
import { ModalSavePin } from "../../components/containers/modalsavepin/ModalSavePin";

export const HomePage = () => {
  return (
    <div>
      <ModalCreateFolder open={true} />
      {/* <ModalComponent
        title={"Salvar PIN"}
        open={true}
        controls={[
          {
            label: "Criar Pasta",
            variant: "primary",
            onClick: () => {
              console.log("Criando Pasta");
            },
          },
          {
            label: "Fechar",
            variant: "secondary",
            onClick: () => {
              console.log("Fechando Modal");
            },
          },
        ]}
      >
        <p>Tem certeza que deseja salvar este PIN?</p>
      </ModalComponent> */}
      <ModalSavePin open={true} />

      <Container fluid>
        <Row>
          <Col xs={12} md={3}>
            <CardComponent
              image={"https://picsum.photos/200/300?53"}
              title={"Matemática"}
              total={9}
            />
          </Col>
          <Col xs={12} md={3}>
            <CardComponent
              image={"https://picsum.photos/200/300?13"}
              title={"Trigonometria"}
              total={9}
            />
          </Col>
          <Col xs={12} md={3}>
            <CardComponent
              image={"https://picsum.photos/200/300?23"}
              title={"Filosofía"}
              total={9}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
