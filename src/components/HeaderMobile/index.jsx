import { Container, Menu } from "./styles";

import logo from "../../assets/food explorer.png";
import polygon from "../../assets/Polygon 1.png";
import { PiListBold } from "react-icons/pi";

export function HeaderMobile(){
  return(
    <Container>
      <Menu>
      <PiListBold/>
      </Menu>
      <img src={polygon} alt="imagem de um polígono" />
      <img src={logo} alt="imagem da logo" />
    </Container>
  )
}