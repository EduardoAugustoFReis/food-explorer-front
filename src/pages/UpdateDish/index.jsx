import { useState, useEffect } from "react";

import { api } from "../../services/api";

import { Container, Main, Buttons, Form, InputCategory, InputUpload} from "./styles";

import {useNavigate, useParams} from "react-router-dom";

import {Header} from "../../components/Header";
import {Footer} from "../../components/Footer";
import {Button} from "../../components/Button";
import {Input} from "../../components/Input";
import {ButtonText} from "../../components/ButtonText";
import {DishItem} from "../../components/DishItem";
import {TextArea} from "../../components/TextArea";
import {Section} from "../../components/Section";

import { RiUpload2Fill } from "react-icons/ri";


export function UpdateDish(){

  const [dish, setDish] = useState(null);

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const [image, setImage] = useState(null);
  
  const [ingredients, setIngredients] = useState([]);
  const [newIngredients, setNewIngredients] = useState("");
  
  const {id} = useParams();
  
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

  async function handleUpdateDish() {

    if (!name) {
      return alert("Digite o nome do prato.");
    }

    if (!category) {
      return alert("Selecione a categoria do prato.");
    }

    if (ingredients.length === 0) {
      return alert("Informe ao menos um ingrediente do prato.");
    }

    if (!price) {
      return alert("Digite o preço do prato.");
    }

    if (!description) {
      return alert("Digite a descrição do prato.");
    }

    try{
      
      const formData = new FormData();
      formData.append("image", image);
      formData.append("name", name);
      formData.append("category", category);
      formData.append("price", price);
      formData.append("description", description);
      formData.append("ingredients", JSON.stringify(Array.isArray(ingredients) ? ingredients : []));

      await api.patch(`/dishes/${id}`, formData);
      alert("Prato atualizado com sucesso!");

    }catch (error){
      if(error.response){
        alert(error.response.data.message);
      }else{
        alert("Não foi possível atualizar!");
      }
    }
    
  }

  function handleImageChange(e) {
    const file = e.target.files[0];
    setImage(file);
  }

  async function handleDeleteDish(){
    
    const confirmDelete = window.confirm("Tem certeza de que deseja excluir este prato?");
    
    if(confirmDelete){
      try{
        await api.delete(`dishes/${id}`);
        alert("Prato excluído com sucesso.");

        navigate("/");

      }catch (error){
        console.error("Erro ao excluir o prato", error);
        alert("Não foi possível excluir o prato.");
      }
    }
  } 

  function handleBack(){
    navigate(-1);
  }
  
  return(
    <Container>
      <Header />

      <Main>
        
      <ButtonText title="Voltar" onClick={handleBack}/>
      
      <h1>Editar prato</h1>

      <Form>

      <div className="inputs-responsive">
      <Section title="Imagem do prato">
        <InputUpload>
          <label htmlFor="image">
              <input
              id="image" 
              type="file" 
              onChange={handleImageChange}
              />
              <RiUpload2Fill />
              Selecione a imagem
            </label>
          </InputUpload>
      </Section>

      <Section title="Nome">
        <Input 
        placeholder="Salada Ceasar"
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
      <Buttons 
      type="button"
      onClick={handleDeleteDish}
      >
        Excluir prato
      </Buttons>

      <Button 
      title="Salvar alterações"
      onClick={handleUpdateDish}
      />
      </div>

      </Form>

      </Main>

      <Footer/>

    </Container>
  )
}