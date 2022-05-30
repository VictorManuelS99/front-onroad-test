import { FC } from "react";

import { Wrapper } from "./styles";

interface Props {
  children: React.ReactNode;
  width?: string;
  height?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export const Button: FC<Props> = ({ children, ...rest }) => {
  return <Wrapper {...rest}>{children}</Wrapper>;
};
