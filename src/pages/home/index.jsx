import { Container, Background ,Content} from "./style"

import { Header } from "../../components/Header"
import {Footer} from "../../components/Footer";
import {Section} from "../../components/Section";
import { Foods } from "../../components/Foods";

import macaronsImg from "../../assets/home-macarons.png";

export function Home(){
  return(
    <Container>

      <Header/>

      <Background>
        <img src={macaronsImg} alt="imagem de macarons" />
        <div>
        <h2>Sabores inigualáveis</h2>
        <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
        </div>
      </Background>

        <Content>

          <Section title="Refeições">
            <Foods/>
          </Section>

          <Section title="Sobremesas">
          <Foods/>

          </Section>

          <Section title="Bebidas">
          <Foods/>
          </Section>
         
        </Content>
      
      <Footer/>

    </Container>
  )
}