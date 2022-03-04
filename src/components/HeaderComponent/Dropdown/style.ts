import styled from "styled-components";
import { SimpleButton } from "../../ui/Button";

export const DropDownContainer = styled.section`

  position: absolute;
  top:0;
  right:0;
  max-width:320px;
  width:100%;
  height:100vh;

  background-color: #fff;

  display:flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width:1030px){
    display: none;
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
`

export const DropdownFooter = styled.footer`
width:100%;
height:70px;

display:grid;
place-items: center;

${SimpleButton}{
  width:80%;

  padding: 8px 30px;
  p {
    font-size:0.8rem;
    color: #fff;
  }
  svg {
    width:16px;
    height:16px;
    fill: #fff;
  }
  :hover {
    filter: brightness(1.3);
    p {
      color: #fff;
    }
  }
}
`