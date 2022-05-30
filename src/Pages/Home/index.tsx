import { Button } from "@Components/Atoms";
import { TableProducts } from "@Components/Organisms/TableProducts";
import { Home as Layout } from "@Layouts";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  const redirectCreateProduct = () => {
    navigate("/product");
  };

  return (
    <Layout>
      <Button onClick={redirectCreateProduct}>Create Product</Button>
      <TableProducts />
    </Layout>
  );
};
