import styled from "styled-components";

interface Props {
  width?: string;
  height?: string;
  error?: boolean;
}

export const Wrapper = styled.input<Props>`
  width: ${(props) => props.width || "370px"};
  height: ${(props) => props.height || "40px"};
  padding-left: 4px;
  border: none;
  box-shadow: 0px 0px 1px 1px ${({ error }) => (error ? "red" : "#6a6a6a")};
  border-radius: 0.25rem;
  background-color: transparent;
  outline: none;
  color: ${({ theme }) => theme.colors.text.light};
  transition: 150ms;

  //autocomplete style
  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus {
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: ${({ theme }) => theme.colors.text.light};
  }

  :hover {
    box-shadow: 0px 0px 1px 1px ${({ theme }) => theme.colors.yellow.hover};
  }
`;
