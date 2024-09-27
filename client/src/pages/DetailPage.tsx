import ProductList from "@/components/ProductList";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import useApi from "@/hooks/useApi";
import ProductsScrollLayout from "@/layout/ScrollLayout";
import { useQuery } from "@tanstack/react-query";
import { useLayoutEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DetailedProductDTO from "../../../shared/dto/DetailedProductDTO";
import useCartOperations from "@/hooks/useCartOperations";
import ProductDetail from "@/components/ProductDetail";

function DetailPage() {
  const param = useParams<{ id: string }>();

  const api = useApi();

  const navigate = useNavigate();

  const { addProductToCart } = useCartOperations();

  const productDetailQuery = useQuery<DetailedProductDTO>({
    queryKey: ["productDetail", param.id],
    queryFn: async () => {
      const response = await api.get(`/product?pid=${param.id}`);
      return response.data;
    },
  });

  const recomendProductQuery = useQuery({
    queryKey: ["recomendProductQuery"],
    queryFn: async () => {
      const response = await api.get("/home");
      return response.data;
    },
  });

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [param.id]);

  return (
    <div>
      <ProductDetail
        data={productDetailQuery.data}
        isLoading={productDetailQuery.isLoading}
        error={productDetailQuery.error}
        LoadingComponent={<div>{"loading..."}</div>}
        ErrorComponent={<div>{"something went wrong while fetching product detail"}</div>}
        addToCart={addProductToCart}
      />

      <div className="col-span-3 min-h-[200px]">
        {recomendProductQuery.data?.map(({ category, products }) => {
          return (
            <div className="flex flex-col gap-3" key={category}>
              <div className="font-bold capitalize">{category}</div>
              <ProductsScrollLayout>
                <ProductList products={products} />
              </ProductsScrollLayout>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DetailPage;
