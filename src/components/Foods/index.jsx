import { Container } from "./styles";

import {Link} from "react-router-dom";

import {Button} from "../../components/Button"

import saladaRavanello from "../../assets/Salada ravanello.png";
import { FiHeart } from "react-icons/fi";
import { TfiPencil } from "react-icons/tfi";
import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";

export function Foods( {data, ...rest}){
  return(
    
    <Container {...rest}>
      <Link to="/details">
      <img src={saladaRavanello} alt="imagem de uma salada" />
      </Link>
      
      <h3>Nome do prato</h3>
      
      <p>preço</p>

      <div>
        <button>
        <FiMinus/>  
        </button>
      <span>01</span>
        <button>
        <FiPlus/>
        </button>
      </div>  

      <Button title="incluir"/>

    </Container>
  )
}