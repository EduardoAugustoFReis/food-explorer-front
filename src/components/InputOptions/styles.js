import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const Select = styled.select`
  width: 100%;
  height: 5.5rem;

  color: ${ ({theme}) =>theme.COLORS.LIGHT_100};
  font-size: 1.6rem;
  background-color: ${ ({theme}) =>theme.COLORS.DARK_900};

  border: none;
  border-radius: 1rem;
  padding: 1.2rem;
`;