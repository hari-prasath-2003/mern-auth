import ProductList from "@/components/ProductList";
import useApi from "@/hooks/useApi";
import ProductsScrollLayout from "@/layout/ScrollLayout";
import { useQuery } from "@tanstack/react-query";
import { useLayoutEffect } from "react";
import { useParams } from "react-router-dom";
import CommentSection from "@/components/CommentSection";
import ProductDetail from "@/components/ProductDetail";
import ProductRecomendation from "@/components/RecomendationProduct";

interface RouteParam {
  id: string;
}

function DetailPage() {
  const param = useParams<{ id: string }>() as RouteParam;

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [param.id]);

  return (
    <>
      <div>
        <ProductDetail productId={param.id} />
        <ProductRecomendation />
        <div className="my-5">
          <CommentSection productId={""} />
        </div>
      </div>
    </>
  );
}

export default DetailPage;
