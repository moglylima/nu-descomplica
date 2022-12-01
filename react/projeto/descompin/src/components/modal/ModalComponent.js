import Modal from "react-bootstrap/Modal";
import { ButtonSpinner } from "../button/ButtonSpinner";

export const ModalComponent = ({
  title,
  children,
  open,
  controls = [],
  onHide,
}) => {
  return (
    <Modal show={open} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        {/* Render botões conforme o específicado */}
        {controls.map((control, index) => (
          <ButtonSpinner key={index} {...control} />
        ))}
      </Modal.Footer>
    </Modal>
  );
};
