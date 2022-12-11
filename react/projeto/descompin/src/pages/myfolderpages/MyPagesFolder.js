import Container from "react-bootstrap/Container";
import { ListGroupFolder } from "../../components/listgroup/ListGroupFolder";
import { useAppContext } from "../../store/AppContext";

export const MyFolderPages = () => {
  const { state } = useAppContext();

  const adapterItens = (itens) => {
    return itens.map((item) => {
      return {
        title: item.name,
        total: item.pins.length,
      };
    });
  };

  return (
    <Container fluid>
      <h1>My Page Folders</h1>
      <ListGroupFolder itens={adapterItens(state.folders)} />
    </Container>
  );
};
