import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  max-width: 100vw;
  height: 100%;

  background-color: var(--dark-brand);

  header {
    margin:0 auto;
    width:100%;
    max-width: var( --max-page-width);
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 20px 0;
    position: relative;

    div {
      display:flex;
      gap:20px;
    }
  }
  
  .dropdown-enter {
    transform: translateX(100%);
    position: absolute;
  }
  .dropdown-enter-active {
    transform: translateX(0);
    transition: transform 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);
  }
  .dropdown-exit {
    transform: translateX(0);
    transition: transform 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);
  }
  .dropdown-exit-active {
    transform: translateX(100%);
  }
  @media (max-width: 1030px){
    header {
      justify-content: space-between;
      padding:20px;
    }
  }
  @media (max-width: 350px){
    header {
      padding:10px;

      div {
        gap:12px;
      }
    }
  }
` ;

export const ContainerDropdown = styled.div`
position: absolute;
top:0; 
right:0;
max-width:320px;
width:100%;

height:100%;
background-color: #fff;
`

export const OpenDropdown = styled.button`

border-radius: 50%;
background-color: var(--brand);
cursor:pointer;
transition: all 0.4s ease;
padding:5px;
border: 3px solid transparent;

svg {
  width: 30px;
  height: 30px;
  fill: #fff;
}

:hover {
  filter:brightness(1.5)
}
:active {
  filter:brightness(1.2);
}
:focus {
  outline: none;
  border-color:#fff;
}
@media (min-width:1030px){
  display:none;
}
@media (max-width:500px){
  svg {
    width:25px;
    height: 25px;
  }
}
@media (max-width:350px){
  padding:8px;

  svg {
    width:20px;
    height: 20px;
  }
}
`

export const NavList = styled.nav`
   
   ul {
     display: flex;
     justify-content: center;
     align-items: center;
     gap:20px;

     li {
        list-style: none;
        height:100%;

        a {
          text-decoration: none;
          color: white;
          font-size:1rem;
          font-weight:600;
          border: 4px solid transparent;
          
          padding: 10px;
          border-radius:8px;

          :hover {
            text-decoration: underline;
          }
          :focus {
            border-color: var(--focus-border);
            outline: none;
          }          
       }
     }
   }
   @media (max-width: 1030px){
     display:none;
   }
`;
