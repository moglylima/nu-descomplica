import Container from "react-bootstrap/Container";
import { ListGroupFolder } from "../../components/listgroup/ListGroupFolder";

export const MyFolderPages = () => {
  return (
    <Container fluid>
      <h1>My Page Folders</h1>
      <ListGroupFolder
        folders={[{ title: "Matemática", total: 3 }, { title: "Inglês" }]}
      />
    </Container>
  );
};
