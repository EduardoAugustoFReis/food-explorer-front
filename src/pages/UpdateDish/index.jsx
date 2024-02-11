import { useState } from "react";

import { Container, Main, Buttons, Form } from "./styles";

import {Link, useNavigate} from "react-router-dom";


import {Header} from "../../components/Header";
import {Footer} from "../../components/Footer";
import {Button} from "../../components/Button";
import {Input} from "../../components/Input";
import {ButtonText} from "../../components/ButtonText";
import {DishItem} from "../../components/DishItem";
import {TextArea} from "../../components/TextArea";
import {Section} from "../../components/Section";


export function UpdateDish(){

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const [ingredients, setIngredients] = useState([]);
  const [newIngredients, setNewIngredients] = useState("");
  
  const navigate = useNavigate();

  function handleAddIngredients() {
    setIngredients((prevState) => [...prevState, newIngredients]);
    setNewIngredients("");
  }

  function handleRemoveIngredients(deleted) {
    setIngredients((prevState) =>
      prevState.filter((ingredient) => ingredient !== deleted)
    );
  }

  
  return(
    <Container>
      <Header />

      <Main>
        
      <Link to="/">
        <ButtonText title="Voltar"/>
      </Link>
      
      <h1>Editar prato</h1>

      <Form>

      <div className="inputs-responsive">
      <Section title="Imagem do prato">
      <label htmlFor="image">
          <input
          id="image" 
          type="file" 
          />
          </label>
      </Section>

      <Section title="Nome">
        <Input 
        placeholder="Salada Ceasar"
        onChange={e => setName(e.target.value)}
        />
      </Section>

      <Section title="Categoria">
      <Input 
        placeholder="Ex: refeição, bebida ou sobremesa"
        type="text"
        onChange={e => setCategory(e.target.value)}
        />
      </Section>
      </div>

      <Section title="Ingredientes">
      <div className="tag-ingredients">
            {ingredients.map((ingredient, index) => (
              <DishItem
                key={index}
                value={ingredient}
                onClick={() => handleRemoveIngredients(ingredient)}
              />
            ))}
            <DishItem
              isNew
              onChange={(e) => setNewIngredients(e.target.value)}
              placeholder="Nome do ingrediente"
              value={newIngredients}
              onClick={handleAddIngredients}
            />
          </div>
      </Section>

      <Section title="Preço">
        <Input type="text" 
        placeholder="R$ 40,00"
        onChange={e => setPrice(e.target.value)}
        />
      </Section>

      <Section title="Descrição">
        <TextArea 
        placeholder="A Salada César é uma opção refrescante para o verão."
        onChange={e => setDescription(e.target.value)}
        />
      </Section>

      <div className="buttons-update">
      <Buttons type="button">
        Excluir prato
      </Buttons>

      <Button 
      title="Salvar alterações"
      
      />
      </div>

      </Form>

      </Main>

      <Footer/>

    </Container>
  )
}