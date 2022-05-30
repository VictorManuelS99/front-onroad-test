import styled from "styled-components";

export const Wrapper = styled.header`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background.second};
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-top: 1rem;
  padding-bottom: 1rem;

  button {
    background-color: ${({ theme }) => theme.colors.button.main};
    color: ${({ theme }) => theme.colors.text.contrast};
    border: none;
    border-radius: 0.25rem;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    font-weight: bold;
    outline: none;
    cursor: pointer;
    display: flex;
    gap: 0.25rem;

    p {
      color: ${({ theme }) => theme.colors.text.contrast};
      font-weight: 600;
    }

    :hover {
      background-color: ${({ theme }) => theme.colors.yellow.hover};
    }
  }
`;
