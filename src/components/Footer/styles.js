import styled from "styled-components";

export const Container = styled.div`
  grid-area: footer;
  width: 100%;

  height: 7.0rem;
  
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.0rem;

  padding: 6px;

  background-color: ${ ({theme}) =>theme.COLORS.DARK_600};

  >img{
    height: 1.4rem;
  }

  >span{
    font-size: 1.2rem;
    color: ${ ({theme}) =>theme.COLORS.LIGHT_200};
    font-family: "Roboto", sans-serif;
  }

`;