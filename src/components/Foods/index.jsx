import { useState } from "react";

import { Container } from "./styles";

import {api} from "../../services/api";

import {Link} from "react-router-dom";

import {Button} from "../../components/Button"

import saladaRavanello from "../../assets/Salada ravanello.png";
import { FiHeart } from "react-icons/fi";
import { TfiPencil } from "react-icons/tfi";
import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";

export function Foods( {data, ...rest}){
  
  const [qtdTotalItems, setTotal] = useState(0);
  
  function add(){
    setTotal(qtdTotalItems + 1);
  }

  function sub(){
    if(qtdTotalItems <= 0){
      setTotal( qtdTotalItems = 0);
    }
    setTotal(qtdTotalItems - 1);
  }

  return(
    
    <Container {...rest}>
      <Link to="/details">
      <img src={saladaRavanello} alt="imagem de uma salada" />
      </Link>
      
      <h3>Nome do prato</h3>
      
      <p>preço</p>

      <div>
        <button onClick={sub}>
        <FiMinus/>  
        </button>
      <span>{qtdTotalItems}</span>
        <button onClick={add}>
        <FiPlus/>
        </button>
      </div>  

      <Button title="incluir"/>

    </Container>
  )
}