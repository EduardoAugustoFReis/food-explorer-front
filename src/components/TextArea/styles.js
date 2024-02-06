import styled from "styled-components";

export const Container = styled.textarea` 
  width: 100%;
  height: 15.0rem;

  background-color: ${ ({theme}) =>theme.COLORS.DARK_800};
  color: ${ ({theme}) =>theme.COLORS.LIGHT_100};
  font-size: 1.6rem;
  border: none;
  resize: none;
  outline: none;

  margin-bottom: 15px;
 
  border-radius: 1.0rem;
  padding: 1.2rem;

  &::placeholder{
    color: ${ ({theme}) =>theme.COLORS.LIGHT_500};
  }
`