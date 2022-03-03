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