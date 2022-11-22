import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";

export const ListGroupFolder = ({ folders = [] }) => {
  return (
    <ListGroup as="ul">
      {folders.map((item, key) => (
        <ListGroup.Item
          key={key}
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">{item.title}</div>
          </div>
          {item.total ? <Badge bg="primary">{item.total}</Badge> : null}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};
