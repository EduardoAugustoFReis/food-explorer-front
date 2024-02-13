import { useState } from "react";

import { api } from "../../services/api";

import {Link, useNavigate} from "react-router-dom";

import { Container, Main, Form, InputCategory, InputUpload } from "./styles";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { ButtonText } from "../../components/ButtonText";
import { DishItem } from "../../components/DishItem";
import { TextArea } from "../../components/TextArea";
import { Section } from "../../components/Section";

import { RiUpload2Fill } from "react-icons/ri";


export function NewDish() {

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("");

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
  
  async function handleCreateDish() {

    if (!name) {
      return alert("Digite o nome do prato.");
    }
    if (!category) {
      return alert("Digite a categoria do prato.");
    }

    if (ingredients.length === 0) {
      return alert("Informe pelo menos um ingrediente.");
    }

    if (newIngredients) {
      return alert(
        "Você deixou um ingrediente no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio."
      );
    }

    if (!price) {
      return alert("Digite o preço do prato.");
    }

    if (!description) {
      return alert("Digite a descrição do prato.");
    }
    
    const formData = new FormData();
    formData.append("image", image);
    formData.append("name", name);
    formData.append("category", category);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("ingredients", JSON.stringify(Array.isArray(ingredients) ? ingredients : []));

    try { 
    await api.post('/dishes', formData);
    alert("Prato criado com sucesso!");
    navigate('/');
    
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível cadastrar o prato.");
      }
    }
  }
 
  function handleImageChange(e) {
    const file = e.target.files[0];
    setImage(file);
    setFileName(file.name);
  }

  return (
    <Container>
    
    <Header/>

    <Main>

      <Link to="/">
        <ButtonText title="Voltar"/>
      </Link>

    <Form>

    <Section title="Imagem do Prato">
        <InputUpload>
          <label htmlFor="image">
          <input
          id="image" 
          type="file" 
          onChange={handleImageChange}
          />
          <RiUpload2Fill/>
          Selecione a imagem
          </label>
        </InputUpload>    
    </Section>

      <Section title="Nome do Prato">
        <Input 
        type="text" 
        placeholder="Nome do prato"
        onChange={e => setName(e.target.value)}
        />
      </Section>

      <Section title="Categoria">
      <InputCategory>
          <label htmlFor="category">
            <select name="" 
            id="category" 
            value={category}
            onChange={e => setCategory(e.target.value)}
            >
              <option value="">Selecionar</option>
              <option value="meal">Refeição</option>
              <option value="dessert">Sobremesa</option>
              <option value="drinks">Bebidas</option>
              
            </select>
          </label>
        </InputCategory>
      </Section>

      <Section title="Preço">
        <Input 
        type="text" 
        onChange={e => setPrice(e.target.value)}
        placeholder="R$ 00,00"/>
      </Section>

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

      <Section title="Descrição">
        <TextArea 
        placeholder="Descrição do prato"
        onChange={e => setDescription(e.target.value)}
        />      
      </Section>

      <Button type="button" 
      title="Criar Prato"
      onClick={handleCreateDish}/>
    </Form>

        
  </Main>
    
    <Footer/>
    </Container>
  );
}