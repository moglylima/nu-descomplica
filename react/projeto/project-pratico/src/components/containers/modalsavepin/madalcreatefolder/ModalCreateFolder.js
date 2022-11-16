import { Form } from "react-bootstrap";
import { ModalComponent } from "../../../modal/Modal";
export const ModalCreateFolder = ({ open }) => {
  return (
    <ModalComponent
      open={open}
      title={"Criar Pasta"}
      controls={[
        {
          label: "Criar",
          variant: "secundary",
          loadingLabel: "Salvando",
          onClick: () => {},
        },
      ]}
    >
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
      </Form>
    </ModalComponent>
  );
};
