import styled from "styled-components";

export const Container = styled.aside`
  width: 100%;
  height: 100vh;
  margin: 0 auto;

  background-color: ${ ({theme}) =>theme.COLORS.DARK_400};
  position: absolute;
  z-index: 1;

  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;

  &[data-menu-is-open="true"]{
    transform: translateX(0);
  }

`;

export const Top = styled.div`
    display: flex;
    gap: 10px;
    color: ${ ({theme}) =>theme.COLORS.LIGHT_300};
    
    padding: 3.0rem 1.2rem;

    >h2{
      font-size: 20px;
    }

    >button{
      background: none;
      border: none;

      >svg{
        color: ${ ({theme}) =>theme.COLORS.LIGHT_300};
        font-size: 2.4rem;
      } 
    }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.0rem;

  background-color: ${ ({theme}) =>theme.COLORS.DARK_400};
  
  padding: 12px;

  button{
  background: none;
  border: none;
  color: ${ ({theme}) =>theme.COLORS.LIGHT_300};
  font-size: 2.0rem;
  text-align: left;
 }

`;