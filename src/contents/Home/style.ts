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

export const HeaderContent = styled.div<PropsTypes>`
padding: 0px 0 20px 0;
position:relative;
height:500px;
width: 100%;
display:flex;
justify-content: center;
z-index:0;
background-color: ${(props) => props.bg};

section {
  z-index:2;
  width:100%;
  max-width: var(--max-page-width);

  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:space-evenly;

  aside {
    display:flex;
    justify-content:center;
    gap:20px;
  }
  article {
    max-width:none;
    width:100%;
    max-width:900px;

    h2,h3,p {
      text-align:center;
    }
    
    h2 {
      padding: 0 0 30px 0;
      font-size:3.5rem;
      font-family: var(--sigmar-one);
      color:#fff;
      line-height:3.3rem;
    }

    p {
      font-size:1.4rem;
      color:#fff;
      padding:0 20px;
    }
  }
 
}
`
export const BackgroundImage = styled.div`

position:absolute;
top:0;
right:0;

width:100%;
height:300px;
z-index:1;
object-fit:cover;

display:flex;
justify-content:flex-end;
img {
  height:100%;
  object-fit:cover;
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
