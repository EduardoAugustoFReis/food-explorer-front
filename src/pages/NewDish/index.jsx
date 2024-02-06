import { useState, useEffect } from "react";

import {Link} from "react-router-dom";

import { Container, Main } from "./styles";

import {Header} from "../../components/Header";
import {UploadDish} from "../../components/UploadDish";
import {Footer} from "../../components/Footer";
import {Button} from "../../components/Button";
import {Input} from "../../components/Input";
import {ButtonText} from "../../components/ButtonText";
import {DishItem} from "../../components/DishItem";
import {TextArea} from "../../components/TextArea";
import {InputOptions} from "../../components/InputOptions";
import {Section} from "../../components/Section";

export function NewDish(){

  return(
    <Container>

      <Header />

      <Main>

      <Link to="/">
      <ButtonText title="Voltar"/>
      </Link>  

      <h1>Novo prato</h1>

      <Section title="imagem do prato">
        <UploadDish/>
      </Section>

      <Section title="Nome">
        <Input placeholder="Ex: Salada Ceasar"/>
      </Section>

      <Section title="Categoria">
      <InputOptions/>
      </Section>

      

      <Section title="Ingredientes">
        <div className="tag-ingredients">
        <DishItem value="Pão Naan"/>
        <DishItem isNew/>
        <DishItem isNew/>
        </div>
      </Section>

      <Section title="Preço">
        <Input type="text" placeholder="R$ 00,00"/>
      </Section>

      <Section title="Descrição">
        <TextArea placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"/>
      </Section>

      
      <Button title="Salvar alterações"/>
      </Main>

      <Footer/>
    </Container>
  )
}