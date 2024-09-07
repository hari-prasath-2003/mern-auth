import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

function ProductCard({ image, title, price, rate, id }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${id}`);
  };

  return (
    <Card onClick={handleClick} className="min-w-[250px] ">
      <CardHeader>
        <img src={image} className="object-contain h-[170px]" />
      </CardHeader>

      <CardContent className="p-6 flex flex-col gap-2">
        <CardTitle className="line-clamp-2 leading-normal h-[3rem]">{title}</CardTitle>
        <h4>₹{price}</h4>
        {/* <Badge variant={"secondary"} className="py-1 px-3 w-[max-content] flex gap-2">
          <Star className="size-[1rem]" color="#ffd700" fill="#ffd700" />
          <p>{rate}</p>
        </Badge> */}
      </CardContent>
      {/* <CardFooter>
        <div className="flex flex-row items-center justify-evenly gap-3 w-full">
          <Button className="w-1/2">Buy now</Button>
          <Button className="w-1/2" variant={"outline"}>
            <ShoppingCart className="size-[1.5rem] min-w-[1.5rem]" />
            Add to card
          </Button>
        </div>
      </CardFooter> */}
    </Card>
  );
}

export default ProductCard;
