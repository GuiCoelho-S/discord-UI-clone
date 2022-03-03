import styled from "styled-components";

interface StyleProps {
  bg?: string;
  color?: string;
}
export const SimpleButton = styled.button<StyleProps>`

  background-color: ${(props) => props.color ? props.color : "#fff"};
  
  border-radius: 50px;
  border: 1px solid ${(props) => props.color ? props.color : "#fff"}; 
  padding: 12px 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap:10px;

  cursor: pointer;

  svg {
    width: 30px;
    height: 30px;
  }
  p {
      color:${(props) => props.color ? props.color : "#000"};
      font-size: 1rem;
  }
  :hover, :focus {
    -webkit-box-shadow: 1px 11px 41px -12px #000000; 
    box-shadow: 1px 11px 41px -12px #000000;
    
    p {
      color: var(--brand);
    }
  }
`;