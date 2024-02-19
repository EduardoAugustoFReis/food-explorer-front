import { Container, Background, Content } from "./style";

import { api } from "../../services/api";

import { useNavigate } from "react-router-dom";

import { useEffect, useState, useRef} from "react";
  
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Section } from "../../components/Section";
import { Foods } from "../../components/Foods";

import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

import macaronsImg from "../../assets/home-macarons.png";

export function Home() {
  const [dishes, setDishes] = useState({ meals: [], desserts: [], drinks: [] });
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchDishes() {
      try {
        const response = await api.get(`/dishes?name=${search}`);
    
        const meals = response.data.filter((dish) => {  
          return dish.category === "meal";
        });
        
        
        const desserts = response.data.filter((dish) => {
         
          return dish.category === "dessert";
        });
        
        
        const drinks = response.data.filter((dish) => {
         
          return dish.category === "drinks";
        });
        
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
        <main>
        <Section title="Refeições">
         <div className="meals">
         {
          dishes.meals.map(dish =>(
            <Foods
            key={String(dish.id)} 
            data={dish}/>
          ))
         }
         </div> 
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
        </main>

      </Content>

      <Footer/>
    </Container>
  );
}
