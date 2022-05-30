import { FC } from "react";

import { Input } from "@Components/Atoms";

import { Wrapper } from "./styles";

interface Props {
  type: string;
  name: string;
  label: string;
}

export const Field: FC<Props> = ({ type, name, label }) => {
  return (
    <Wrapper>
      <span>{label}</span>
      <Input name={name} type={type} />
    </Wrapper>
  );
};
