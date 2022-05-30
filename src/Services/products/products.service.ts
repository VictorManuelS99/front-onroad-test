import { Product } from "@Models/Product";
import { instance } from "@Services/api";

export const getProducts = async (): Promise<Product[]> => {
  const { data } = await instance.get("/products");
  return data;
};

export const getProduct = async (id: string): Promise<Product> => {
  const { data } = await instance.get(`/products/${id}`);
  return data;
};

export const createProduct = async (product: Product): Promise<Product> => {
  const { data } = await instance.post("/products", product);
  return data;
};

export const updateProduct = async (id: string, product: Product): Promise<Product> => {
  const { data } = await instance.put(`/products/${id}`, product);
  return data;
};

export const deleteProduct = async (id: string): Promise<void> => {
  await instance.delete(`/products/${id}`);
};
