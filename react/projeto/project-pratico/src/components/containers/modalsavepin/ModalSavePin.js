import { Col, ListGroup, Row } from "react-bootstrap";
import { ButtonSpinnerComponent } from "../../buttons/ButtonSpinnerComponent";
import { ModalComponent } from "../../modal/Modal";

export const ModalSavePin = ({ open }) => {
  return (
    <ModalComponent
      title="Salvar Pin"
      open={open}
      controls={[
        {
          label: "Criar Pasta",
          variant: "secondary",
          onClick: () => {
            console.log("Criando Pasta");
          },
        },
      ]}
    >
      <h1>Modal Save Pin</h1>
      <ListGroup variant="flush">
        <ListGroup.Item>
          <Row>
            <Col xs={8}>Matemática</Col>
            <Col xs={4}>
              <ButtonSpinnerComponent
                className="text-end"
                label={"Salvar"}
                loadingLabel={"Salvando"}
              />
            </Col>
          </Row>
        </ListGroup.Item>
      </ListGroup>
    </ModalComponent>
  );
};
