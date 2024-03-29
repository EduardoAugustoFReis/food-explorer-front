import styled from "styled-components";
import {DEVICE_BREAKPOINT} from "../../styles/deviceBreakproint";


export const Container = styled.div`
  max-width: 500px;
  height: 100vh;
  margin: 0 auto;

  @media (min-width: ${DEVICE_BREAKPOINT.SM}){
    max-width: 100%;
    display: grid;
    grid-template-rows: 100px auto 70px;
    grid-template-areas: 
    "header"
    "content"
    "footer";
  }

`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 2.0rem;
  background-color: ${({theme}) =>theme.COLORS.DARK_400};
  
  img{
    width: 20.0rem;
    border-radius: 50%;
  }

  h2,p{
    color: ${ ({theme}) =>theme.COLORS.LIGHT_300};
    text-align: center;
  }

  h2{
    font-size: 2.4rem;
    font-family: "Poppins", sans-serif;
    padding-top: 1.0rem;
    padding-bottom: 1.0rem;
  }

  p{
    font-size: 1.8rem;
    font-family: "Poppins", sans-serif;
    padding-bottom: 1.0rem;
  }

  .ingredients-tag{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 4px;
    padding-bottom: 1.0rem;
  }

  .button-units{
    display: flex;
    align-items: center;
    gap: 10px;

    span{
      color: ${({theme}) =>theme.COLORS.LIGHT_300};  
      font-family: "Roboto", sans-serif;
      font-size: 18px;
    }
    
    >button{
      background: none;
      border: none;
      color: ${({theme}) =>theme.COLORS.LIGHT_300};  
      >svg{
        font-size: 20px;
      }
    }

  }

  .button-wrapper{
    width: 30.0rem;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  @media (min-width: ${DEVICE_BREAKPOINT.SM}){
    padding-top: 15px;

    img{
      width: 25.0rem;
      border-radius: 50%;
    }
  }
`;