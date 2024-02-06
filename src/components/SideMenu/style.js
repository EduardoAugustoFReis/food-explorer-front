import styled from "styled-components";

export const Container = styled.div`

  height: 100vh;
  max-width: 500px;
  margin: 0 auto;

  background-color: ${ ({theme}) =>theme.COLORS.DARK_400};
  position: relative;

`;

export const Top = styled.div`
    display: flex;
    gap: 10px;
    color: ${ ({theme}) =>theme.COLORS.LIGHT_300};
    
    padding: 3.0rem 1.2rem;

    >h2{
      font-size: 22px;
    }

    >a{
      
      >svg{
        color: ${ ({theme}) =>theme.COLORS.LIGHT_300};
        font-size: 2.6rem;
      } 
    }
    
    
`;

export const Main = styled.div`

  display: flex;
  flex-direction: column;
  gap: 2.0rem;

  background-color: ${ ({theme}) =>theme.COLORS.DARK_400};
  
  padding: 12px;

  >a{
    font-size: 2.8rem;
    color: ${ ({theme}) =>theme.COLORS.LIGHT_300};
  }

  svg{
    color: ${ ({theme}) =>theme.COLORS.LIGHT_300};
  }

`;