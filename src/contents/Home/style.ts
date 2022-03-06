import styled from "styled-components";

interface PropsTypes {
  bg: string;
}

export const HomeContainer = styled.main`
margin:0 auto;
display:flex;
align-items:center;
flex-direction: column;

`

export const Content = styled.div<PropsTypes>`

  width:100%; 
  background-color:${(props) => props.bg}; 
  display:grid; 
  place-items:center;
  padding: 100px 0;

  section {
    width:100%;
    max-width: var(--max-page-width);
    display:flex;
    justify-content:space-around;
    align-items:center;

  article {
    width:400px;
    display:flex;
    flex-direction:column;

    h2 {
        font-size:2.8rem;
      }
    
    h3 {
        font-size:2.2rem;
      } 

      p {
        padding-top:30px;
        font-size:1.5rem;
        font-family: var(--istok-web);
      }
    }
  
  aside {
      max-width:600px;
      width:100%;
    }

`

export const FooterContent = styled(Content)`

section {
  flex-direction:column;
  align-items:center;
  article {
    max-width:none;
    width:100%;
    padding:0 30px;

    h2,h3,p {
      text-align:center;
    }
    
    h2, h3 {
      padding: 30px 0;
    }
  }
  
  button {
    padding:10px 40px;
    p {
      font-size:1.2rem;
    }
  }
}


`
