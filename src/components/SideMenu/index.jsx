import { Container, Top, Main} from "./style";

import { IoMdClose } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";

import {Input} from "../Input";
import { Footer } from "../Footer";

export function SideMenu(){
  return(
    <Container> 

      <Top>
        <a href="#">
      <IoMdClose/>
        </a>
      <h2>Menu</h2>
      </Top>
      

      <Main>
  
      <Input icon={IoIosSearch} placeholder="Busque por pratos ou ingredientes"/>
      
      <a href="">Novo Prato</a>
      <a href="">Sair</a>  
      
      </Main>
      
      <Footer/>

    </Container>
  )
}