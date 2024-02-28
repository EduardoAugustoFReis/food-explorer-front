import styled from "styled-components";
import {DEVICE_BREAKPOINT} from "../../styles/deviceBreakproint";


export const Container = styled.button`
  background: none;
  border: none;
  font-size: 1.8rem;
  color: ${ ({theme}) =>theme.COLORS.LIGHT_100};
  font-family: "Poppins", sans-serif;
  padding-top: 1.0rem;
  padding-bottom: 1.0rem;

  @media (min-width: ${DEVICE_BREAKPOINT.SM}){
    font-size: 2.2rem;
  }
`;