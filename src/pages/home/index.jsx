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
import { SideMenu } from "../../components/SideMenu";

export function Home() {
  const [dishes, setDishes] = useState({ meals: [], desserts: [], drinks: [] });
  const [search, setSearch] = useState("");
  const [menuIsOpen, setMenuIsOpen] = useState(false);

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
      <SideMenu
      menuIsOpen={menuIsOpen}
      onCloseMenu={() => setMenuIsOpen(false)}
      setSearch={setSearch}
      />

      <Header setSearch={setSearch} onOpenMenu={()=> setMenuIsOpen(true)}/>

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
              {dishes.meals.length > 0 ? (
                dishes.meals.map((dish) => (
                  <Foods key={String(dish.id)} data={dish} />
                ))
              ) : (
                <p>Nenhum prato de refeição encontrado.</p>
              )}
            </div>
          </Section>

          <Section title="Sobremesas">
            {dishes.desserts.length > 0 ? (
              dishes.desserts.map((dish) => (
                <Foods key={String(dish.id)} data={dish} />
              ))
            ) : (
              <p>Nenhuma sobremesa encontrada.</p>
            )}
          </Section>

          <Section title="Bebidas">
            {dishes.drinks.length > 0 ? (
              dishes.drinks.map((dish) => (
                <Foods key={String(dish.id)} data={dish} />
              ))
            ) : (
              <p>Nenhuma bebida encontrada.</p>
            )}
          </Section>
        </main>
      </Content>

      <Footer/>
    </Container>
  );
}
