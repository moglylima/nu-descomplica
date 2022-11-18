import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ListGroup from "react-bootstrap/ListGroup";
import { ModalComponent } from "../../components/modal/ModalComponent";
import { ButtonSpinner } from "../../components/button/ButtonSpinner";

export const ModalSavePin = ({ open }) => {
  return (
    <ModalComponent
      open={open}
      title="Salvar Pin"
      controls={[
        {
          label: "Criar Pasta",
          variant: "secondary",
          onClick: () => console.log("Criar pasta!"),
        },
      ]}
    >
      <ListGroup variant="flush">
        <ListGroup.Item>
          <Row>
            <Col xs={8}>Matematica</Col>
            <Col xs={4} className="text-end">
              <ButtonSpinner label="Salvar" loadingLabel="Salvando" />
            </Col>
          </Row>
        </ListGroup.Item>
        <ListGroup.Item>
          <Row>
            <Col xs={8}>Fisica</Col>
            <Col xs={4} className="text-end">
              <ButtonSpinner label="Salvar" loadingLabel="Salvando" />
            </Col>
          </Row>
        </ListGroup.Item>
        <ListGroup.Item>
          <Row>
            <Col xs={8}>Quimica</Col>
            <Col xs={4} className="text-end">
              <ButtonSpinner label="Salvar" loadingLabel="Salvando" />
            </Col>
          </Row>
        </ListGroup.Item>
      </ListGroup>
    </ModalComponent>
  );
};
