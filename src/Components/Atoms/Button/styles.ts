import styled from "styled-components";

interface Props {
  width?: string;
  height?: string;
}

export const Wrapper = styled.button<Props>`
  width: ${(props) => props.width || "135px"};
  height: ${(props) => props.height || "40px"};
  border-radius: 4px;
  font-size: 16px;
  background-color: ${({ theme }) => theme.colors.button.main};
  color: ${({ theme }) => theme.colors.text.contrast};
  font-weight: 600;
  border: none;
  cursor: pointer;

  :hover{
    background-color: ${({ theme }) => theme.colors.yellow.hover};
  }
`;
