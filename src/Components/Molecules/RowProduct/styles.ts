import styled from "styled-components";

export const Wrapper = styled.tr`
  border-bottom: 1px solid #474d57;
  color: ${({ theme }) => theme.colors.text.light};

  td {
    padding: 1rem;

    svg {
      color: ${({ theme }) => theme.colors.button.main};
      cursor: pointer;
      :hover {
        color: ${({ theme }) => theme.colors.yellow.hover};
      }
    }
  }
`;
