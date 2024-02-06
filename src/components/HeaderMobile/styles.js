import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 7.0rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.0rem;

  background-color: ${ ({theme}) =>theme.COLORS.DARK_700};
  padding: 1.2rem;

  img{
    height: 3.0rem;
  }

`;

export const Menu = styled.button`
    background: none;
    border: none;
    padding-top: 5px;
    padding-right: 2.0rem;
    
    >svg{
      font-size: 2.6rem;
      color: ${ ({theme}) =>theme.COLORS.LIGHT_100};
    }

     
    @media (min-width: 768px){
      display: none;
    }
    
`;