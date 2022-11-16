import { Button, Spinner } from "react-bootstrap";

export const ButtonSpinnerComponent = ({
  loading,
  variant,
  disabled,
  label,
  loadingLabel,
  onClick,
}) => {
  return (
    <Button variant={variant} disabled={disabled} onClick={onClick}>
      {loading && (
        <div>
          <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
          >
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          {}
        </div>
      )}
      {loading ? loadingLabel : label}
    </Button>
  );
};
