import { Container, Logout, Brand, ButtonDish } from "./styles";

import {Link} from "react-router-dom";

import logo from "../../assets/food explorer.png";
import polygon from "../../assets/Polygon 1.png";

import { IoIosSearch } from "react-icons/io";
import { MdOutlineLogout } from "react-icons/md";

import { Input } from "../Input";
import { Button } from "../Button";


export function HeaderDesktop(){
  return(
    <Container>
      <Brand>
      <img src={polygon} alt="imagem de um polígono" />
      <img src={logo} alt="Logo do site" />
      </Brand>
      
      <Input icon={IoIosSearch} placeholder="Busque por pratos ou ingredientes" type="text"/>
      
      <ButtonDish>
      <Link to="/new">
      <Button title="Novo prato"/>
      </Link>
      </ButtonDish>

      <Logout>
      <MdOutlineLogout/>      
      </Logout>

    </Container>
  )
}