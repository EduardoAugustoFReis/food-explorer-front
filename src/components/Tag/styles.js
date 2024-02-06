import styled from "styled-components";

export const Container = styled.div`
  width: fit-content;

  background-color: ${({theme}) => theme.COLORS.DARK_1000};
  color: ${({theme}) => theme.COLORS.LIGHT_100};
  font-size: 1.6rem;
  border-radius: 5px;
  padding: 1.2rem;
  margin-right: 6px;
`;