import { useEffect, useState } from "react";

import { RowProduct } from "@Components/Molecules/RowProduct";

import { getProducts } from "@Services/products/products.service";

import { Product } from "@Models/Product";

import { Wrapper } from "./styles";

export const TableProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = async () => {
    const data = await getProducts();
    setProducts(data);
  };

  const listProducts = () => {
    return products.map((product, i) => {
      return <RowProduct key={i} i={i} product={product} setProducts={fetchProducts} />;
    });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Wrapper>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Price</th>
          <th>Description</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>{listProducts()}</tbody>
    </Wrapper>
  );
};
