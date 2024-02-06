import styled from "styled-components";


export const Container = styled.div`
  max-width: 500px;
  margin: 0 auto;

  display: grid;
  grid-template-rows: 70px auto auto 70px;
  grid-template-areas: 
  "header"
  "image"
  "content"
  "footer";
  background-color: ${ ({theme}) =>theme.COLORS.DARK_400};

  
  @media (min-width: 501px){
    max-width: 100%;
  }
  
  
`;

export const Background = styled.div`
  grid-area: image;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.0rem;
  
  margin-top: 1.0rem;
  margin-bottom: 1.0rem;
  background-color: transparent;
  padding: 0px 1.6rem;

  img{
    height: 12.0rem;
    width: 12.0rem;
  }

  div{
    display: flex;
    flex-direction: column;
    
    >h2, p{
    color: ${ ({theme}) =>theme.COLORS.LIGHT_300};
    }

    >h2{
      font-size: 2.0rem;
      padding-bottom: 5px;
    }

    p{
      font-size: 1.4rem;
    }
  }
  
  @media (min-width: 501px){
    padding-top: 4.0rem;

    gap: 4.0rem;

    img{
      height: 25.0rem;
      width: 25.0rem;
    }

    div{

      >h2{
        font-size: 2.8rem;
      }
      >p{
        font-size: 1.8rem;
      }
    }

  }
  
`; 

export const Content = styled.div`
  grid-area: content;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 501px){
    
  }
  
`;

