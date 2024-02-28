import styled from "styled-components";
import {DEVICE_BREAKPOINT} from "../../styles/deviceBreakproint";


export const Container = styled.div`
  width: 25.0rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.0rem;
  padding: 1.5rem; 
  
  margin-bottom: 1.0rem;

  position: relative;
  
  background-color: transparent;
  border-radius: 1.0rem;
  
  .favorites-button{
    position: absolute;
    top: 0px;
    right: 2.0rem;
    svg{
      font-size: 2.4rem;
    }
  }

  .pencil-button{
    position: absolute;
    top: 0px;
    right: 2.0rem;
    svg{
      font-size: 2.4rem;
    }
  }
  
  img {
    width: 14.0rem;
    border-radius: 50%;
    cursor: pointer;
  }
  
  > h3 {
    color: ${ ({theme}) =>theme.COLORS.LIGHT_300};
    font-family: "Poppins", sans-serif;
    font-size: 20px;
    text-align: center; 
  }

  > span {
    color: ${({theme}) => theme.COLORS.LIGHT_400};
    font-family: "Roboto", sans-serif;
    text-align: center;
    overflow: hidden; 
    max-height: 3.6rem; 
    display: -webkit-box;
    -webkit-line-clamp: 3; 
    -webkit-box-orient: vertical;
  }

  > p {
    color: ${ ({theme}) =>theme.COLORS.CAKE_200};
    font-family: "Roboto", sans-serif;
    font-size: 18px;
    text-align: center; 
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: center; 
    gap: 8px;

    span {
      color: ${ ({theme}) =>theme.COLORS.LIGHT_300};
      font-family: "Roboto", sans-serif;
      font-size: 16px;
    }

    button {
      background: none;
      border: none;
    }

    svg {
      color: ${ ({theme}) =>theme.COLORS.LIGHT_300};
      font-size: 20px;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINT.SM}){
    >img{
      width: 19.0rem;
    }
  }
`;