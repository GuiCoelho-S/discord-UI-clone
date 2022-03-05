import styled from "styled-components";

interface Props {
  textColor?: string;
  svgColor?: string;
  textSize: string;
  svgSize: number;
}

export const HomeButton = styled.button<Props>`
  background-color:inherit;
  height: 60px;
  display:flex;
  justify-content: start;
  align-items: center;
  gap:10px;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid transparent;

  svg {
    width: ${(props) => `${props.svgSize}px`};
    height: ${(props) => `${props.svgSize}px`};
    fill: ${(props) => props.svgColor ? props.svgColor : "#fff"};
  }
  p {
    font-weight: 900;
    color: ${(props) => props.textColor ? props.textColor : "#fff"};
    font-size: ${(props) => props.textSize};
}

  :focus {
    outline: 4px solid var(--focus-border);
  }
`;
