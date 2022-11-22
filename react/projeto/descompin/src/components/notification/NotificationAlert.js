import ReactDOM from "react-dom";
import "./index.css";

import Alert from "react-bootstrap/Alert";

export const NotificationAlert = ({
  message,
  variant = "success",
  onClose,
}) => {
  return ReactDOM.createPortal(
    <div className="notification-alert">
      <Alert variant={variant} onClose={onClose} dismissible>
        {message}
      </Alert>
    </div>,
    document.body
  );
};
