import styled from "styled-components";

export const Wrapper = styled.table`
  border-collapse: collapse;
  border-top-right-radius: 1rem;

  thead {
    background-color: ${({ theme }) => theme.colors.background.second};
    color: ${({ theme }) => theme.colors.text.light};
    font-weight: 700;

    th {
      padding: 1rem;
      padding-top: 0.7rem;
      padding-bottom: 0.7rem;

      :first-child {
        border-radius: 8px 0 0 0;
      }
      :last-child {
        border-radius: 0 8px 0 0;
      }
    }
  }
`;
