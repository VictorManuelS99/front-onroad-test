import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup.string().required(),
  price: yup.number().required(),
  description: yup.string().required(),
});
