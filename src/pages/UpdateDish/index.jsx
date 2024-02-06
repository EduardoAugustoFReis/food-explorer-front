import { Container, Main, Buttons } from "./styles";

import {Link} from "react-router-dom";


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


export function UpdateDish(){
  return(
    <Container>
      <Header />

      <Main>
        
        <Link to="/">
        <ButtonText title="Voltar"/>
        </Link>

      <h1>Editar prato</h1>

      <div className="inputs-responsive">
      <Section title="imagem do prato">
        <UploadDish/>
      </Section>

      <Section title="Nome">
        <Input placeholder="Salada Ceasar"/>
      </Section>

      <Section title="Categoria">
      <InputOptions/>
      </Section>
      </div>


      <Section title="Ingredientes">
        <div className="tag-ingredients">
        <DishItem value="Pão Naan"/>
        <DishItem isNew/>
        <DishItem isNew/>
        <DishItem isNew/>
        <DishItem isNew/>
        <DishItem isNew/>
        <DishItem isNew/>
        <DishItem isNew/>

        </div>
      </Section>

      <Section title="Preço">
        <Input type="text" placeholder="R$ 40,00"/>
      </Section>

      <Section title="Descrição">
        <TextArea placeholder="A Salada César é uma opção refrescante para o verão."/>
      </Section>

      <div className="buttons-update">
      <Buttons type="button">
        Excluir prato
      </Buttons>
      <Button title="Salvar alterações"/>
      </div>

      </Main>

      <Footer/>

    </Container>
  )
}