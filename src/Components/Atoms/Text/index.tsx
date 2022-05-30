import { FC } from "react";

import { Wrapper } from "./styles";

interface Props {
  children: React.ReactNode;
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  margin?: string;
}

export const Text: FC<Props> = ({ children, ...rest }) => {
  return <Wrapper {...rest}>{children}</Wrapper>;
};
