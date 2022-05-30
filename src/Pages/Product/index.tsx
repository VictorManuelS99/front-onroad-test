import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

import { Button, Text } from "@Components/Atoms";
import { Field } from "@Components/Molecules";
import { Form } from "@Components/Organisms";

import { Home as Layout } from "@Layouts";

import { Product as IProduct } from "@Models/Product";

import { createProduct, getProduct, updateProduct } from "@Services/products/products.service";

import { schema } from "@Validations/Product";

export const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [defaultProduct, setDefaultProduct] = useState<IProduct>();

  const submit = async (data: IProduct) => {
    if (id) {
      try {
        await updateProduct(id, data);
        toast.success("Product updated successfully");
        navigate("/");
      } catch (error) {
        toast.error("Error updating product");
      }
    } else {
      try {
        await createProduct(data);
        toast.success("Product created successfully");
        navigate("/");
      } catch (error) {
        toast.error("Error creating product");
      }
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    if (id) {
      try {
        const product = await getProduct(id);
        setDefaultProduct(product);
      } catch (error) {
        navigate("/");
      }
    }
  };

  return (
    <Layout>
      <Text fontSize="2rem" margin="1rem" fontWeight="700">
        {id ? "Edit Product" : "Create Product"}
      </Text>
      <Button onClick={() => navigate("/")}>Back</Button>
      <Form handleSubmit={submit} defaultValues={defaultProduct} schema={schema}>
        <Field name="name" label="Name" type="text" />
        <Field name="price" label="Price" type="number" />
        <Field name="description" label="Description" type="text" />
        <Button type="submit">Guardar</Button>
      </Form>
    </Layout>
  );
};
