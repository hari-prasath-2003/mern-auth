import CommentSection from "./CommentSection";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";

function ProductDetailInfo({
  title,
  category,
  description,
  price,
  addToCart,
}: {
  title: string;
  category: string;
  description: string;
  price: number;
  addToCart: () => void;
}) {
  return (
    <div className=" col-span-3 xl:col-span-1 flex gap-5 flex-col border-2 border-gray-100 p-5">
      <h1 className="font-bold">{title}</h1>
      <Badge className="w-fit p-1 text-center" variant={"secondary"}>
        {category}
      </Badge>
      <h1>{description}</h1>
      <p>₹{price}</p>
      <div className="flex flex-row items-center justify-evenly gap-3 w-full">
        <Button className="w-1/2">Buy now</Button>
        <Button className="w-1/2" variant={"outline"} onClick={addToCart}>
          <ShoppingCart className="size-[1.5rem] min-w-[1.5rem]" />
          Add to card
        </Button>
      </div>
    </div>
  );
}

export default ProductDetailInfo;
