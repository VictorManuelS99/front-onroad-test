import { FC } from "react";

import { Header } from "@Components/Organisms";

import { Content, Wrapper } from "./styles";

interface Props {
  children: React.ReactNode;
}

export const Home: FC<Props> = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <Content>{children}</Content>
    </Wrapper>
  );
};
