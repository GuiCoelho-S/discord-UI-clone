import styled from "styled-components";

interface StyleProps {
  bg?: string;
  textColor?: string;
}
export const SimpleButton = styled.button<StyleProps>`

  background-color: ${(props) => props.bg ? props.bg : "#fff"};
  
  border-radius: 50px;
  border: 1px solid ${(props) => props.bg ? props.bg : "#fff"}; 
  padding: 12px 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap:10px;

  cursor: pointer;

  svg {
    width: 30px;
    height: 30px;
    fill:${(props) => props.textColor ? props.textColor : "#000"};
  }
  p {
      color:${(props) => props.textColor ? props.textColor : "#000"};
      font-size: 1rem;
  }
  :hover, :focus {
    -webkit-box-shadow: 1px 11px 41px -12px #000000; 
    box-shadow: 1px 11px 41px -12px #000000;
    
    p {
      color: var(--brand);
    }
  }
  @media (max-width:400px){
    padding: 8px 14px;
  }
`;