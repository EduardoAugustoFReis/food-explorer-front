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
        const response = await api.get(`/dishes`);
        const meals = response.data.filter((dish) => dish.category === "meal");
        const desserts = response.data.filter((dish) => dish.category === "dessert");
        const drinks = response.data.filter((dish) => dish.category === "drinks");

        setDishes({ meals, desserts, drinks });
      } catch (error) {
        console.error("Error fetching dishes:", error);
      }
    }

    fetchDishes();
  }, []);

  return (
    <Container>
      <Header/>
      
      <Background>
        <img src={macaronsImg} alt="imagem de macarons" />
        <div>
          <h2>Sabores inigualáveis</h2>
          <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
        </div>
      </Background>
      <Content>

        <Section title="Refeições">
         
        </Section>

      </Content>

      <Footer/>
    </Container>
  );
}
