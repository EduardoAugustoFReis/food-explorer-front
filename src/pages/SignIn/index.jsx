import { useState } from "react";

import {useAuth} from "../../hooks/auth";

import { Container, Form, Brand } from "./styles"

import {Link} from "react-router-dom";

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import {Section} from "../../components/Section";

import foodExplore from "../../assets/food explorer.png";
import polygon from "../../assets/Polygon 1.png";

export function SignIn(){

  const {signIn} = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignIn(){
    signIn({email, password});
  }

  return(
    <Container>

      <Brand>
      <img src={polygon} alt="poligono logo do site" />
      <img src={foodExplore} alt="Logo do site" />
      </Brand>


      <Form>
        <h1>Faça login</h1>
        <Section title="Email">
        <Input 
        placeholder="Exemplo: exemplo@exemplo.com.br" 
        type="text"
        onChange={e => setEmail(e.target.value)}
        />
        </Section>

        <Section title="Senha">
        <Input 
        placeholder="No mínimo 6 caracteres" 
        type="password"
        onChange={e => setPassword(e.target.value)}
        />
        </Section>

        <Button title="Entrar" type="button" onClick={handleSignIn}/>
          
       <Link to="/register">Criar uma conta</Link>

      </Form>
     
    </Container>
  )
}