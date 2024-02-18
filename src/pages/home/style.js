import styled from "styled-components";


export const Container = styled.div`
  max-width: 500px;
  margin: 0 auto;
 
  background-color: ${ ({theme}) =>theme.COLORS.DARK_400};

  
  @media (min-width: 501px){
    max-width: 100%;

    display: grid;
    grid-template-rows: 70px auto auto 70px;
    grid-template-areas: 
    "header"
    "image"
    "content"
    "footer";
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
  padding: 0px 2.0rem;

  img{
    height: 10.0rem;
    width: 10.0rem;
  }

  div{
    display: flex;
    flex-direction: column;
    
    >h2, p{
    color: ${ ({theme}) =>theme.COLORS.LIGHT_300};
    text-align: left;
    }

    >h2{
      font-size: 1.8rem;
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
      height: 20.0rem;
      width: 20.0rem;
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

