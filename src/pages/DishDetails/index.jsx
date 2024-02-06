import { Container, Content} from "./styles";

import {Link} from "react-router-dom";

import {Header} from "../../components/Header";
import {Footer} from "../../components/Footer";
import {ButtonText} from "../../components/ButtonText";
import {Tag} from "../../components/Tag";
import {Button} from "../../components/Button";
import {Section} from "../../components/Section";

import {FiPlus, FiMinus} from "react-icons/fi";

import saladaRavanello from "../../assets/Salada ravanello.png";

export function DishDetails(){
  return(
    <Container>
      <Header/>  

      <Content>
        <Link to="/">
        <ButtonText title="Voltar"/>
        </Link>
        <img src={saladaRavanello} alt="imagem de uma salada" />
        

        <h2>nome do prato</h2>
        <p>Descrição do prato</p>

        <Section>
          <div className="ingredients-tag">
          <Tag title="alface"/>
          <Tag title="alface"/>
          <Tag title="alface"/>
          <Tag title="alface"/>
          <Tag title="alface"/>
          <Tag title="alface"/>
          </div>
        </Section>

        <div className="button-wrapper">

        <div className="button-units">
        <button>
        <FiMinus/>
        </button>
        <span>01</span>
        <button>
        <FiPlus/>
        </button>
        </div>

        <Button title="pedir"/>
        </div>
      </Content> 
      
      <Footer/>
    </Container>
  )
}