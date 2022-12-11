import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";

export const CardComponent = ({ id, title, image, total, onClick }) => {
  return (
    <Card>
      <Card.Img src={image} alt="Card image" />
      <Card.ImgOverlay>
        <Button variant="primary" onClick={() => onClick(id)}>
          Profile <Badge bg="secondary">{total}</Badge>
          <span className="visually-hidden">unread messages</span>
        </Button>
      </Card.ImgOverlay>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
      </Card.Body>
    </Card>
  );
};
