import { Container, Background ,Content} from "./style"

import { api } from "../../services/api";

import { useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";

import { Header } from "../../components/Header"
import {Footer} from "../../components/Footer";
import {Section} from "../../components/Section";
import { Foods } from "../../components/Foods";

import macaronsImg from "../../assets/home-macarons.png";

export function Home(){

  const [search, setSearch] = useState("");

  const [dishes, setDishes] = useState({ meals: [], desserts: [], drinks: [] });
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const response = await api.get(`/dishes?search=${search}`);
      const meals = response.data.filter(dish => dish.category === "meal");
      const desserts = response.data.filter(dish => dish.category === "dessert");
      const drinks = response.data.filter(dish => dish.category === "drinks");

      setDishes({ meals, desserts, drinks });
    }

    fetchData();
  }, [search]);

  const handleSearchInputChange = (value) => {
    setSearch(value);
  };

  return(
    <Container>

      <Header onInputChange={handleSearchInputChange}/>

      <Background>
        <img src={macaronsImg} alt="imagem de macarons" />
        <div>
        <h2>Sabores inigualáveis</h2>
        <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
        </div>
      </Background>

        <Content>
        <Section title="Refeições">
        <Foods/>
        </Section>

          <Section title="Bebidas">
          <Foods/>
          </Section>
         
        </Content>
      
      <Footer/>

    </Container>
  )
}