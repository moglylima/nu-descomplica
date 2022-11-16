import { Badge, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
export const CardComponent = ({ image, title, total }) => {
  return (
    <Card className="">
      <Card.Img src={image} alt="Card image" />
      <Card.ImgOverlay>
        <Button variant="primary">
          Salvar <Badge bg="secondary">{total}</Badge>
          <span className="visually-hidden">unread messages</span>
        </Button>
      </Card.ImgOverlay>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
      </Card.Body>
    </Card>
  );
};
