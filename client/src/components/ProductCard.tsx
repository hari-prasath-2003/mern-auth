import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

import ProductDTO from "../../../shared/dto/ProductDTO";

function ProductCard({ coverImage, title, price, _id }: ProductDTO) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${_id}`);
  };

  return (
    <Card onClick={handleClick} className="min-w-[300px] cursor-pointer">
      <CardHeader>
        <img src={coverImage} className="object-contain h-[170px]" />
      </CardHeader>

      <CardContent className="p-6 flex flex-col gap-2">
        <CardTitle className="line-clamp-2 leading-normal h-[3rem]">{title}</CardTitle>
        <h4>₹{price}</h4>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
