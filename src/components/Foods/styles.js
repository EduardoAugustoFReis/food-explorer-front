import styled from "styled-components";

export const Container = styled.div`
  width: 25.0rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.0rem;
  padding: 1.5rem; 
  
  margin-bottom: 1.0rem;
  
  background-color: transparent;
  border-radius: 1.0rem;
  
  img {
    width: 18.0rem;
    cursor: pointer;
  }
  
  > h3 {
    color: ${ ({theme}) =>theme.COLORS.LIGHT_300};
    font-size: 20px;
    text-align: center; 
  }

  > span {
    color: ${({theme}) => theme.COLORS.LIGHT_400};
    text-align: center;
    overflow: hidden; 
    max-height: 3.6rem; 
    display: -webkit-box;
    -webkit-line-clamp: 3; 
    -webkit-box-orient: vertical;
  }

  > p {
    color: ${ ({theme}) =>theme.COLORS.CAKE_200};
    font-size: 18px;
    text-align: center; 
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: center; 
    gap: 8px;

    span {
      color: ${ ({theme}) =>theme.COLORS.LIGHT_300};
      font-size: 16px;
    }

    button {
      background: none;
      border: none;
    }

    svg {
      color: ${ ({theme}) =>theme.COLORS.LIGHT_300};
      font-size: 20px;
    }
  }
`;