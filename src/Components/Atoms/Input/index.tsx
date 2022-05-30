import { FC } from "react";
import { useFormContext } from "react-hook-form";

import { Wrapper } from "./styles";

interface Props {
  width?: string;
  height?: string;
  type: string;
  name: string;
}

export const Input: FC<Props> = ({ name, ...rest }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const error = errors[name];

  return <Wrapper error={error} {...rest} {...register(name)} />;
};
