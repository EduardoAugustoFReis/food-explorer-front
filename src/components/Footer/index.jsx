import { Container } from "./styles";

import polygonFooter from "../../assets/Polygon-footer.png"
import copyRight from "../../assets/food-explorer-footer.png"

export function Footer(){
  return(
    <Container>

      <img src={polygonFooter} alt="imagem de um polígono" />
      <img src={copyRight} alt="copyright do site" />
      <span>© 2023 - Todos os direitos reservados.</span>
    </Container>
  )
}