import { FC } from "react";

import { Product } from "@Models/Product";

import { AiFillDelete, AiFillEdit } from "react-icons/ai";

import { Wrapper } from "./styles";
import { useNavigate } from "react-router-dom";
import { deleteProduct } from "@Services/products/products.service";
import toast from "react-hot-toast";

interface Props {
  i: number;
  product: Product;
  setProducts: () => void;
}

export const RowProduct: FC<Props> = ({ i, product, setProducts }) => {
  const { id, name, price, description } = product;
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/product/${id}`);
  };

  const handleDelete = async () => {
    try {
      await deleteProduct(id);
      setProducts();
      toast.success("Product deleted successfully");
    } catch (error) {
      toast.error("Error deleting product");
    }
  };

  return (
    <Wrapper>
      <td>{i}</td>
      <td>{name}</td>
      <td>${price}</td>
      <td>{description}</td>
      <td>
        <AiFillEdit onClick={handleEdit} />
      </td>
      <td>
        <AiFillDelete onClick={handleDelete} />
      </td>
    </Wrapper>
  );
};
