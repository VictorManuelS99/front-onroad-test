import { FC, useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import { AnyObjectSchema } from "yup";

import { Wrapper } from "./styles";

interface Props {
  schema: AnyObjectSchema;
  children: React.ReactNode;
  defaultValues?: any;
  handleSubmit: (data: any) => void;
}

export const Form: FC<Props> = ({ schema, children, defaultValues, handleSubmit: onValid }) => {
  const methods = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const { handleSubmit, setValue } = methods;

  useEffect(() => {
    if (defaultValues) {
      Object.keys(defaultValues).forEach((key) => {
        setValue(key, defaultValues[key]);
      });
    }
  }, [defaultValues]);

  return (
    <FormProvider {...methods}>
      <Wrapper onSubmit={handleSubmit(onValid)}>{children}</Wrapper>
    </FormProvider>
  );
};
