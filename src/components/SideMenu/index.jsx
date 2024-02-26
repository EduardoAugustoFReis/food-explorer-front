import { Container, ButtonCloseMenu, Main} from "./style";

import {useAuth} from "../../hooks/auth";
import {USER_ROLES} from "../../utils/roles";

import {useNavigate} from "react-router-dom";


import { IoMdClose } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";

import {Input} from "../Input";

export function SideMenu( {menuIsOpen, onCloseMenu, setSearch}){

  const {signOut, user} = useAuth();
  const navigate = useNavigate();

  function handleSignOut(){
    navigate("/");
    signOut();
  }

  function handleNewDish(){
    navigate("/new");
  }

  function handleInputChange(event) {
    setSearch(event.target.value);
    console.log("Valor de busca:", event.target.value);
  }

  return(
    <Container data-menu-is-open={menuIsOpen}> 

      <ButtonCloseMenu>
        <button onClick={onCloseMenu}>
        <IoMdClose/>
        </button>
      <h2>Menu</h2>
      </ButtonCloseMenu>

      <Main>
      <Input 
      icon={IoIosSearch} 
      placeholder="Busque por pratos ou ingredientes"
      onChange={handleInputChange}
      /> 

      { user.role === USER_ROLES.ADMIN &&
      <button onClick={handleNewDish}>Novo prato</button>
      }   
      
      <button onClick={handleSignOut}>Sair</button>
      </Main>
  
    </Container>
  )
}