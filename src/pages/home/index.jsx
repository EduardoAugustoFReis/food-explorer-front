import { Container, Brand, Content, CarouselInner } from "./style";

import { api } from "../../services/api";

import { useNavigate } from "react-router-dom";

import { useEffect, useState, useRef} from "react";
  
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Section } from "../../components/Section";
import { Foods } from "../../components/Foods";
import { SideMenu } from "../../components/SideMenu";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import macaronsImg from "../../assets/home-macarons.png";

import {motion} from "framer-motion";

export function Home() {
  const [dishes, setDishes] = useState({ meals: [], desserts: [], drinks: [] });
  const [search, setSearch] = useState("");
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const navigate = useNavigate();
 
  const [carouselPositionMeals, setCarouselPositionMeals] = useState(0);
  const [carouselPositionDesserts, setCarouselPositionDesserts] = useState(0);
  const [carouselPositionDrinks, setCarouselPositionDrinks] = useState(0);


  const handleNextMeals = () => {
    setCarouselPositionMeals(prevPosition => prevPosition + 1);
  };

  const handlePreviousMeals = () => {
    setCarouselPositionMeals(prevPosition => prevPosition - 1);
  };


  const handleNextDesserts = () => {
    setCarouselPositionDesserts(prevPosition => prevPosition + 1);
  };

  const handlePreviousDesserts = () => {
    setCarouselPositionDesserts(prevPosition => prevPosition - 1);
  };

  const handleNextDrinks = () => {
    setCarouselPositionDrinks(prevPosition => prevPosition + 1);
  };
  
  const handlePreviousDrinks = () => {
    setCarouselPositionDrinks(prevPosition => prevPosition - 1);
  };


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

      <Brand>
        <img src={macaronsImg} alt="imagem de macarons" />
        <div>
          <h2>Sabores inigualáveis</h2>
          <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
        </div>
      </Brand>

      <Content>
        <main>

          <Section title="Refeições">
            <div className="carousel-size-card">
              <motion.div className="carousel" drag="x" dragConstraints={{ left: -500, right: 500 }} >
                {dishes.meals.length > 0 ? (
                <CarouselInner width={dishes.meals.length * 100} position={carouselPositionMeals} items={dishes.meals.length}>
                {dishes.meals.map((dish) => (
                  <div className="meal-item" key={String(dish.id)}>
                    <Foods data={dish} />
                  </div>
                ))}
              </CarouselInner>
                ) : (
                  <p>Nenhum prato de refeição encontrado.</p>
                )}
              </motion.div>
            </div>
            <div className="button-carousel-layout">
            <button onClick={handlePreviousMeals} className="button-carousel"><IoIosArrowBack/></button>
            <button onClick={handleNextMeals} className="button-carousel"><IoIosArrowForward /></button>
            </div>
          </Section>

          <Section title="Sobremesas">
            <div className="carousel-size-card">
              <motion.div className="carousel" drag="x" dragConstraints={{ left: -500, right: 500 }}>
                {dishes.desserts.length > 0 ? (
                  <CarouselInner width={dishes.desserts.length * 100} position={carouselPositionDesserts} items={dishes.desserts.length}>
                    {dishes.desserts.map((dish) => (
                      <div className="meal-item" key={String(dish.id)}>
                        <Foods data={dish} />
                      </div>
                    ))}
                  </CarouselInner>
                ) : (
                  <p>Nenhuma sobremesa encontrada.</p>
                )}
              </motion.div>
            </div>
            <div className="button-carousel-layout">
            <button onClick={handlePreviousDesserts} className="button-carousel"><IoIosArrowBack/></button>
            <button onClick={handleNextDesserts} className="button-carousel"><IoIosArrowForward /></button>
            </div>
          </Section>
          
          <Section title="Bebidas">
            <div className="carousel-size-card">
              <motion.div className="carousel" drag="x" dragConstraints={{ left: -500, right: 500 }}>
                {dishes.drinks.length > 0 ? (
                  <CarouselInner width={dishes.drinks.length * 100} position={carouselPositionDrinks} items={dishes.drinks.length}>
                    {dishes.drinks.map((dish) => (
                      <div className="meal-item" key={String(dish.id)}>
                        <Foods data={dish} />
                      </div>
                    ))}
                  </CarouselInner>
                ) : (
                  <p>Nenhuma bebida encontrada.</p>
                )}
              </motion.div>
            </div>
            <div className="button-carousel-layout">
              <button onClick={handlePreviousDrinks} className="button-carousel"><IoIosArrowBack/></button>
              <button onClick={handleNextDrinks} className="button-carousel"><IoIosArrowForward /></button>
            </div>
          </Section>

        </main>
      </Content>

      <Footer/>
    </Container>
  );
}
