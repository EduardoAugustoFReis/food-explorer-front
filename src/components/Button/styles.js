import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 5.6rem;

  color: ${ ({theme}) =>theme.COLORS.LIGHT_100};
  font-weight: 500;
  font-size: 1.8rem;
  background-color: ${ ({theme}) =>theme.COLORS.TOMATO_100};

  border: none;
  border-radius: 1.0rem;

  padding: 1.2rem;

`;