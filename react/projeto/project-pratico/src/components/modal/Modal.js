import { Modal } from "react-bootstrap";
import { ButtonSpinnerComponent } from "../buttons/ButtonSpinnerComponent";

export const ModalComponent = ({ title, children, open, controls = [] }) => {
  function handleClose() {}
  return (
    <Modal show={open} onHide={() => {}}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        {controls.map((control, controlIndex) => (
          <ButtonSpinnerComponent
            key={controlIndex}
            variant={control.variant}
            onClick={control.onClick}
            label={control.label}
            loadingLabel={control.loadingLabel}
            loading={control.loading}
          />
        ))}
      </Modal.Footer>
    </Modal>
  );
};
