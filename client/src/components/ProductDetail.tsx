import DetailedProductDTO from "../../../shared/dto/DetailedProductDTO";
import { useNavigate } from "react-router-dom";
import { QueryObserverSuccessResult, useQuery, useQueryClient } from "@tanstack/react-query";
import ProductDetailImageGalary from "./ProductDetailImageGalary";
import ProductDetailInfo from "./ProductDetailInfo";
import useApi from "@/hooks/useApi";
import useCartOperations from "@/hooks/useCartOperations";
import CommentSection from "./CommentSection";

function ProductDetail({ productId }: { productId: string }) {
  const navigate = useNavigate();

  const api = useApi();

  const { addProductToCart } = useCartOperations();

  const productDetailQuery = useQuery({
    queryKey: ["productDetail", productId],
    queryFn: async () => {
      const response = await api.get(`/product?pid=${productId}`);
      return response.data;
    },
  }) as QueryObserverSuccessResult<DetailedProductDTO>;

  const queryClient = useQueryClient();

  function handleAddToCart() {
    const onSuccessCallback = async () => {
      await queryClient.resetQueries({ queryKey: ["cart"] });
      navigate("/cart");
    };
    addProductToCart(productDetailQuery.data._id, onSuccessCallback);
  }

  if (productDetailQuery.isError) {
    return <div>{"something went wrong while fetching product detail"}</div>;
  }

  if (productDetailQuery.isLoading) {
    return <div>{"loading..."}</div>;
  }

  return (
    // TODO fix the grid issue
    <div className="grid grid-cols-[60px_1fr] xl:grid-cols-[60px_2fr_1fr] gap-5 my-5 grid-rows-[calc(100vh-204px)_auto_1fr] gap-5">
      <ProductDetailImageGalary images={productDetailQuery.data.images} />
      <ProductDetailInfo
        title={productDetailQuery.data.title}
        category={productDetailQuery.data.category}
        description={productDetailQuery.data.description}
        price={productDetailQuery.data.price}
        addToCart={handleAddToCart}
      />
    </div>
  );
}

export default ProductDetail;
