import { useEffect, useState } from "react";
import {useAuth} from "../../hooks/auth";
import {USER_ROLES} from "../../utils/roles";

import { Container, Logout, Brand, ButtonDish, HeaderDesktop, Menu, HeaderMobile, BrandMobile} from "./styles"; 

import {useNavigate} from "react-router-dom";

import logo from "../../assets/food explorer.png";
import polygon from "../../assets/Polygon 1.png";

import { IoIosSearch } from "react-icons/io";
import { MdOutlineLogout } from "react-icons/md";
import { PiListBold } from "react-icons/pi";
import { FiShoppingCart } from "react-icons/fi";

import { Input } from "../Input";
import { Button } from "../Button";

export function Header({ setSearch, onOpenMenu}) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
 
  const {signOut, user} = useAuth();

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
            <Menu onClick={onOpenMenu}>
              <PiListBold/>
            </Menu>
            <BrandMobile>
            <img src={polygon} alt="imagem de um polígono" />
            <img src={logo} alt="imagem da logo" />

            { user.role === USER_ROLES.ADMIN &&
              <p>Admin</p>
            }
            </BrandMobile>

          </HeaderMobile>  
        </div>
      ) : (
        <div>
          <HeaderDesktop>
            <div>
            <Brand>
            <img src={polygon} alt="imagem de um polígono" />
            <img src={logo} alt="Logo do site" />

            { user.role === USER_ROLES.ADMIN &&
              <p>Admin</p>
            }
            </Brand>
            </div>

            <Input
              icon={IoIosSearch}
              placeholder="Busque por pratos ou ingredientes"
              type="text"
              onChange={handleInputChange}
            />
            
            <ButtonDish>
            {user.role === USER_ROLES.ADMIN && (
              <Button title="Novo prato" onClick={handleNew} />
            )}

            {user.role === USER_ROLES.CUSTOMER &&
            <>
            <Button icon={FiShoppingCart} title="Carrinho" /> 
            </> 
            }
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
