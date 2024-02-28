import styled from "styled-components";
import {DEVICE_BREAKPOINT} from "../../styles/deviceBreakproint";

export const Container = styled.div`
  height: 100vh;
  max-width: 450px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: ${ ({theme}) =>theme.COLORS.DARK_400};

  @media (min-width: ${DEVICE_BREAKPOINT.SM}){
    max-width: 100%;
    display: flex;
    flex-direction: row;
    gap: 10.0rem;

    padding: 20px;
  }
`;

export const Form = styled.form`
  
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  
  border-radius: 1.0rem;
  
  padding: 1.6rem;

  background-color: ${ ({theme}) =>theme.COLORS.DARK_700};

  >h1{
    color:  ${ ({theme}) =>theme.COLORS.LIGHT_100} ;
    font-size: 2.0rem;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    padding-bottom: 5px;
  }

  >a{
    color:  ${ ({theme}) =>theme.COLORS.LIGHT_100} ;
    font-family: "Poppins", sans-serif;
    font-size: 1.8rem;
    text-align: center;
    padding-top: 2.0rem;
  }
  
  @media (min-width: ${DEVICE_BREAKPOINT.SM}){
    max-width: 65.0rem;
    padding: 2.0rem;

    >h1{
      text-align: center;
      font-size: 2.4rem;
    }

    >a{
      font-size: 2.0rem;
    }
  }
  
`;

export const Brand = styled.div`
  display: flex;
  gap: 10px;

  padding-bottom: 3.0rem;

  >img{
    width: 100%;
    height: 3.0rem;
  }

  @media (min-width: ${DEVICE_BREAKPOINT.SM}){
    display: flex;
    
    >img{
      height: 5.0rem;
    }
  }

`

