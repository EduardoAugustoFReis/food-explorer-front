import { Container, Form, Brand } from "./styles"

import {Link} from "react-router-dom";

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import {Section} from "../../components/Section";

import foodExplore from "../../assets/food explorer.png";
import polygon from "../../assets/Polygon 1.png";

export function SignIn(){
  return(
    <Container>

      <Brand>
      <img src={polygon} alt="poligono logo do site" />
      <img src={foodExplore} alt="Logo do site" />
      </Brand>


      <Form>
        <h1>Faça login</h1>
        <Section title="Email">
        <Input placeholder="Exemplo: exemplo@exemplo.com.br" type="text"/>
        </Section>

        <Section title="Senha">
        <Input placeholder="No mínimo 6 caracteres" type="password"/>
        </Section>

        <Button title="Entrar"/>
          
       <Link to="/register">Criar uma conta</Link>

      </Form>
     
    </Container>
  )
}