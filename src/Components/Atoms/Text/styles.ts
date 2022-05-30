import styled from "styled-components";

interface Props {
  fontSize?: string;
  color?: string;
  margin?: string;
  fontWeight?: string;
}

export const Wrapper = styled.p<Props>`
  margin: ${(props) => props.margin || "0"};
  font-size: ${(props) => props.fontSize || "14px"};
  color: ${(props) => props.color || props.theme.colors.text.light};
  font-weight: ${(props) => props.fontWeight || "400"};
`;
