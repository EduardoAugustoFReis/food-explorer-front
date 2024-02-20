import { useState } from "react";

import { api } from "../../services/api";
import {useAuth} from "../../hooks/auth";
import {USER_ROLES} from "../../utils/roles";
import { useNavigate } from "react-router-dom";

import { Container } from "./styles";

import { Button } from "../../components/Button";
import { FiMinus, FiPlus } from "react-icons/fi";

import { IoHeartOutline } from "react-icons/io5";
import { IoHeart } from "react-icons/io5";
import { GoPencil } from "react-icons/go";

export function Foods({ data,...rest }) {
  const {user} = useAuth();

  const [qtdTotalItems, setTotal] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [inCart, setInCart] = useState(false);
  const navigate = useNavigate();

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

  function handleDetails() {
    navigate(`/details/${data.id}`); 
  }

  function handleUpdate() {
    navigate(`/update/${data.id}`);
  }

  function handleFavoriteClick(){
    setIsFavorite(!isFavorite);
    
    if (!isFavorite) {
      alert("Prato adicionado aos favoritos.");
    }else{
      alert("Prato retirado dos favoritos.");
    }

  };

  const handleCart = () => {
    if (inCart) {
      setInCart(false);
      alert("O prato foi Retirado do carrinho.");
    } else {
      setInCart(true);
      alert("O prato foi colocado no carrinho.");
    }
  };

  console.log("Dados recebidos no componente Foods:", data);

  return (
    <Container {...rest}>
      
      { user.role === USER_ROLES.CUSTOMER &&
        <div className="favorites-button">
        <button onClick={handleFavoriteClick}>
        {isFavorite ? <IoHeart /> : <IoHeartOutline />}
        </button>
        </div>
      }

      { user.role === USER_ROLES.ADMIN &&
        <div className="pencil-button">
        <button onClick={handleUpdate}>
          <GoPencil/>
        </button>
        </div>
      }

        <img
          src={`${api.defaults.baseURL}/files/${data.image}`} 
          alt="Imagem do prato." 
          onClick={() => handleDetails(data.id)} 
        />

      <h3>{data.name}</h3>

      <span>{data.description}</span>

      <p>R$ {data.price}</p>

      
      <div>
        {user.role === USER_ROLES.CUSTOMER &&
        <>
          <button onClick={sub}>
            <FiMinus />
          </button>
          <span>{qtdTotalItems}</span>
          <button onClick={add}>
            <FiPlus />
          </button>
        </>
        }
      </div> 
      
      {
        user.role === USER_ROLES.CUSTOMER &&
        <Button title={inCart ? "Remover" : "Incluir"} onClick={handleCart}/>
      }
      
    </Container>
  );
}
