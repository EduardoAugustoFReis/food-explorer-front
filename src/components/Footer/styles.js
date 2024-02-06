import styled from "styled-components";

export const Container = styled.div`
  grid-area: footer;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  padding: 6px;


  background-color: ${ ({theme}) =>theme.COLORS.DARK_600};

  >img{
    height: 1.4rem;
  }

  >span{
    font-size: 1.2rem;
    color: ${ ({theme}) =>theme.COLORS.LIGHT_200};
  }

`;