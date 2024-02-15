import { Container, Background, Content } from "./style";

import { api } from "../../services/api";

import { useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Section } from "../../components/Section";
import { Foods } from "../../components/Foods";

import macaronsImg from "../../assets/home-macarons.png";

export function Home() {
  const [dishes, setDishes] = useState({ meals: [], desserts: [], drinks: [] });
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  function handleDetails(id) {
    navigate(`/dish/${id}`);
  }

  useEffect(() => {
    async function fetchDishes() {
      try {
        console.log("Chamando fetchDishes...");
        const response = await api.get(`/dishes?name=${search}`);
    
        const meals = response.data.filter((dish) => {
          console.log("Categoria do prato:", dish.category);
          return dish.category === "meal";
        });
        console.log("Refeições filtradas:", meals);
        
        const desserts = response.data.filter((dish) => {
          console.log("Categoria do prato:", dish.category);
          return dish.category === "dessert";
        });
        console.log("Sobremesas filtradas:", desserts);
        
        const drinks = response.data.filter((dish) => {
          console.log("Categoria do prato:", dish.category);
          return dish.category === "drinks";
        });
        console.log("Bebidas filtradas:", drinks);
        
        console.log(response.data);
        setDishes({ meals, desserts, drinks });
      } catch (error) {
        console.error("Error fetching dishes:", error);
      }
    }

    fetchDishes();
  }, [search]);

  return (
    <Container>
      <Header  setSearch={setSearch}/>
      
      <Background>
        <img src={macaronsImg} alt="imagem de macarons" />
        <div>
          <h2>Sabores inigualáveis</h2>
          <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
        </div>
      </Background>
      <Content>

        <Section title="Refeições">
         {
          dishes.meals.map(dish =>(
            <Foods
            key={String(dish.id)} 
            data={dish}/>
          ))
         }
        </Section>

        <Section title="Sobremesas">
         {
          dishes.desserts.map(dish =>(
            <Foods
            key={String(dish.id)} 
            data={dish}/>
          ))
         }
        </Section>

        <Section title="Bebidas">
         {
          dishes.drinks.map(dish =>(
            <Foods
            key={String(dish.id)} 
            data={dish}/>
          ))
         }
        </Section>


      </Content>

      <Footer/>
    </Container>
  );
}
