import { useState } from "react";
import { api } from "../../services/api";

import { Container } from "./styles";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { FiMinus, FiPlus } from "react-icons/fi";

export function Foods({ data, ...rest }) {
  const [qtdTotalItems, setTotal] = useState(0);
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
  
  console.log("Dados recebidos no componente Foods:", data);

  return (
    <Container {...rest}>

        <img
          src={`${api.defaults.baseURL}/files/${data.image}`} 
          alt="Imagem do prato." 
          onClick={() => handleDetails(data.id)} 
        />

      <h3>{data.name}</h3>

      <span>{data.description}</span>

      <p>{data.price}</p>

      <div>
        <button onClick={sub}>
          <FiMinus />
        </button>
        <span>{qtdTotalItems}</span>
        <button onClick={add}>
          <FiPlus />
        </button>
      </div>

      <Button title="incluir" />
    </Container>
  );
}
