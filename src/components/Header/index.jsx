import { Container } from "./styles";

import { useState, useEffect } from "react";

import {HeaderMobile} from "../HeaderMobile";
import { HeaderDesktop } from "../../components/HeaderDesktop";


export function Header(){
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  
  return(
    <Container>

      {windowWidth <= 600 ? (
        <HeaderMobile/>
      ) : (
        <HeaderDesktop />
      )}

    </Container>
  )
}