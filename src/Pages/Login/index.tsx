import { Button, Text } from "@Components/Atoms";
import { Field } from "@Components/Molecules";
import { Form } from "@Components/Organisms";

import { Login as Layout } from "@Layouts";

import { UserLogin } from "@Models";
import { login } from "@Services/auth/auth.service";

import { schema } from "@Validations/Login";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = async (data: UserLogin) => {
    try {
      const token = await toast.promise(login(data), {
        success: "Login successful",
        error: "Login failed",
        loading: "Logging in...",
      });

      localStorage.setItem("token", token);
      navigate("/");
    } catch (error) {}
  };

  return (
    <Layout>
      <Text fontSize="1.75rem" fontWeight="700" margin="0 0 1.5rem 0">
        Inicio de sesión
      </Text>
      <Form handleSubmit={handleSubmit} schema={schema}>
        <Field label="Correo electrónico" name="email" type="text" />
        <Field label="Contraseña" name="password" type="password" />
        <Button width="100%">Iniciar sesión</Button>
      </Form>
    </Layout>
  );
};
