import { useEffect, useState } from "react";
import {useAuth} from "../../hooks/auth";

import { Container, Logout, Brand, ButtonDish, HeaderDesktop, Menu, HeaderMobile} from "./styles"; 

import {Navigate, useNavigate} from "react-router-dom";

import logo from "../../assets/food explorer.png";
import polygon from "../../assets/Polygon 1.png";

import { IoIosSearch } from "react-icons/io";
import { MdOutlineLogout } from "react-icons/md";
import { PiListBold } from "react-icons/pi";

import { Input } from "../Input";
import { Button } from "../Button";

export function Header({ setSearch }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const {signOut} = useAuth();

  const navigate = useNavigate();

  function handleNew(){
    navigate("/new");
  }

  function handleSignOut(){
    navigate("/");
    signOut();
  }

  function handleInputChange(event) {
    setSearch(event.target.value);
    console.log("Valor de busca:", event.target.value);
  }

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); 

  return (
    <Container>
     
      {windowWidth <= 600 ? (
        <div>
          <HeaderMobile>
            <Menu>
              <PiListBold/>
            </Menu>
            <img src={polygon} alt="imagem de um polígono" />
            <img src={logo} alt="imagem da logo" />
          </HeaderMobile>  
        </div>
      ) : (
        <div>
          <HeaderDesktop>
            <Brand>
            <img src={polygon} alt="imagem de um polígono" />
            <img src={logo} alt="Logo do site" />
            </Brand>

            <Input
              icon={IoIosSearch}
              placeholder="Busque por pratos ou ingredientes"
              type="text"
              onChange={handleInputChange}
            />
            
            <ButtonDish>
              
              <Button title="Novo prato" onClick={handleNew}/>
              
            </ButtonDish>

            <Logout onClick={handleSignOut}>
              <MdOutlineLogout/>      
            </Logout>
          </HeaderDesktop>  
        </div>
      )}
    </Container>
  );
}
