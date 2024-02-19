import { useState, useEffect } from "react";
import { api } from "../../services/api";

import {useAuth} from "../../hooks/auth";
import {USER_ROLES} from "../../utils/roles";

import { Container, Content} from "./styles";

import {useParams, useNavigate} from "react-router-dom";

import {Header} from "../../components/Header";
import {Footer} from "../../components/Footer";
import {ButtonText} from "../../components/ButtonText";
import {Tag} from "../../components/Tag";
import {Button} from "../../components/Button";
import {Section} from "../../components/Section";

import {FiPlus, FiMinus} from "react-icons/fi";


export function DishDetails(){

  const {user} = useAuth();

  const [dish, setDish] = useState(null);
  const [qtdTotalItems, setTotal] = useState(0);

  const { id } = useParams();
  const navigate = useNavigate();

  function handleUpdateButtonClick() {
    navigate(`/update/${id}`);
  }

  function handleBack(){
    navigate(-1);
  }

  function add() {
    setTotal(qtdTotalItems + 1);
  }

  function sub() {
    if (qtdTotalItems <= 0) {
      setTotal(0);
    } else {
      setTotal(qtdTotalItems - 1);
    }
  }


  useEffect(() => {
    async function fetchDishDetails() {
      try {
        const response = await api.get(`/dishes/${id}`);
        console.log(response.data);
        setDish(response.data);
      } catch (error) {
        console.error("Error fetching dish details:", error);
      }
    }

    fetchDishDetails();
  }, [id]);

  return(
    <Container>
      <Header/>  

      <Content>
       
        <ButtonText title="Voltar" onClick={handleBack}/> 
        
        <img src={dish ? `${api.defaults.baseURL}/files/${dish.image}` : ''} alt="imagem de uma salada" />
         
        <h2>{dish ? dish.name : ''}</h2>
       
        <p>{dish ? dish.description : ''}</p>
        
        <Section>
          <div className="ingredients-tag">
          {dish && dish.ingredients && dish.ingredients.map(ingredient => (
            <Tag 
              key={String(ingredient.id)} 
              title={ingredient.title} 
            />
          ))}
          </div>
        </Section>


        <div className="button-wrapper">

        <div className="button-units">
        { user.role === USER_ROLES.CUSTOMER &&
        <>
          <button onClick={sub}>
          <FiMinus/>
          </button>
          <span>{qtdTotalItems}</span>
          <button onClick={add}>
          <FiPlus/>
          </button>
        </>
        }
        </div>

        {
          user.role === USER_ROLES.CUSTOMER &&
          <Button title="Incluir">
          </Button>
        }

        { user.role === USER_ROLES.ADMIN &&
          <Button title="atualizar" onClick={handleUpdateButtonClick}/>
        }
       
        </div>
      </Content> 
      
      <Footer/>
    </Container>
  )
}