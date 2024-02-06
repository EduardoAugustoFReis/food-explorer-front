import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  :root{
    font-size: 62.5%;
  }

  body{
    font-size: 16px;
  }

  a, button{
    cursor: pointer;
    transition: 0.1s;
  }

  a{
    text-decoration: none;
  }

  a:hover, button:hover{
    filter: brightness(0.9);
  }

`
