import ProductList from "@/components/ProductList";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import useApi from "@/hooks/useApi";
import ProductsScrollLayout from "@/layout/ScrollLayout";
import { useQuery } from "@tanstack/react-query";
import { ShoppingCart } from "lucide-react";
import { useEffect, useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DetailPage() {
  const param = useParams<{ id: string }>();

  const api = useApi();

  const [selectedImgIndex, setSelectedImgIndex] = useState(0);

  const productDetailQuery = useQuery({
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

  if (productDetailQuery.isLoading || recomendProductQuery.isLoading) {
    return <p>lodaing...</p>;
  }

  return (
    <div>
      <div className="grid grid-cols-[60px_1fr] xl:grid-cols-[60px_2fr_1fr]  grid-rows-[calc(100vh-204px)_auto_1fr] gap-5">
        <div className="flex flex-col gap-2 overflow-y-scroll">
          {[1, 2, 3, 4, 5].map((_, index) => {
            return productDetailQuery.data.images.map((src: string) => {
              return (
                <div
                  key={src}
                  className={`border-2 ${
                    index == selectedImgIndex ? "border-blue-300" : "border-gray-300"
                  } rounded-sm p-2 flex justify-center h-[60px]`}
                  onClick={() => setSelectedImgIndex(index)}
                >
                  <img src={src} className="object-contain"></img>
                </div>
              );
            });
          })}
        </div>
        <div className="flex justify-center align-middle h-full ">
          <img
            src={productDetailQuery.data.images[selectedImgIndex]}
            className="object-contain"
            alt="product preview image"
          ></img>
        </div>
        <div className=" col-span-3 xl:col-span-1 flex gap-5 flex-col">
          <h1 className="font-bold">{productDetailQuery.data.title}</h1>
          <Badge className="w-fit p-1 text-center" variant={"secondary"}>
            {productDetailQuery.data.category}
          </Badge>
          <h1>{productDetailQuery.data.description}</h1>
          <p>₹{productDetailQuery.data.price}</p>
          <div className="flex flex-row items-center justify-evenly gap-3 w-full">
            <Button className="w-1/2">Buy now</Button>
            <Button className="w-1/2" variant={"outline"}>
              <ShoppingCart className="size-[1.5rem] min-w-[1.5rem]" />
              Add to card
            </Button>
          </div>
        </div>
        <div className="col-span-3 min-h-[200px]">
          {recomendProductQuery.data.map(({ category, products }) => {
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
    </div>
  );
}

export default DetailPage;
