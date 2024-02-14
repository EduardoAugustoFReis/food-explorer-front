import { useState } from "react";
import { Container } from "./styles";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { FiMinus, FiPlus } from "react-icons/fi";

export function Foods({ data, ...rest }) {
  const [qtdTotalItems, setTotal] = useState(0);

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

  
  console.log("Dados recebidos no componente Foods:", data);

  return (
    <Container {...rest}>
      <Link to={`/details/${data.id}`}>
        <img
          src={`http://localhost:3333/files/${data.image}`}
          alt={`imagem de ${data.name}`}
        />
      </Link>

      <h3>{data.name}</h3>

      <p>{data.description}</p>

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
