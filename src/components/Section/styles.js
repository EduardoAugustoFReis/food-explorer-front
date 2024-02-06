import styled from "styled-components";

export const Container = styled.div`
   padding-top : 6px;
   
   >h2{
    padding-bottom: 1.0rem;
    padding-left: 6px;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-weight: 400;
    font-size: 2.0rem;
  }

  @media (min-width: 501px){
    
    >h2{
    font-size: 2.4rem;
    }
  }
`;