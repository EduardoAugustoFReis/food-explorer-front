import { useState } from "react";

import { Container, Form, Brand } from "./styles"

import {api} from "../../services/api";

import {Link, useNavigate} from "react-router-dom";

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import {Section} from "../../components/Section";

import foodExplore from "../../assets/food explorer.png";
import polygon from "../../assets/Polygon 1.png";

export function SignUp(){

  const [name, setName] = useState(""); 
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 

  const navigate = useNavigate();
  
  function handleSignUp(){

    if(!name || !email || !password){
      return alert("Preencha todos os campos!");
    }

    api.post("/users", {name, email, password})
    .then(() =>{
      alert("Usuário cadastrado com sucesso!");
      navigate("/");
    })
    .catch(error =>{
      if(error.response){
        alert(error.response.data.message);
      }else{
        alert("Não foi possível cadastrar.");
      }
    })

  }

  return(
    <Container>

      <Brand>
      <img src={polygon} alt="poligono logo do site" />
      <img src={foodExplore} alt="Logo do site" />
      </Brand>


      <Form>
        <h1>Crie sua conta</h1>

        <Section title="Seu nome">
        <Input 
        placeholder="Exemplo: Maria da Silva" 
        type="text"
        onChange={e => setName(e.target.value)}
        />
        </Section>

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

        <Button 
        title="Criar conta"
        type="button"
        onClick={handleSignUp}
        />
          
       <Link to="/">Já tenho uma conta</Link>

      </Form>
     
    </Container>
  )
}