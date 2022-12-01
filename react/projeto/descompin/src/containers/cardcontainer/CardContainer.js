import { CardComponent } from "../../components/card/CardComponent";
import { openModalSavePinAction } from "../../store/actions";
import { useAppContext } from "../../store/AppContext";

export const CardContainer = (props) => {
  const { state, dispatch } = useAppContext();
  const hadleClick = () => {
    console.log("Clicou no card");
    dispatch(openModalSavePinAction());
  };
  return <CardComponent {...props} onClick={hadleClick} />;
};
