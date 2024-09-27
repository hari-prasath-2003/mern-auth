import { useState } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";
import DetailedProductDTO from "../../../shared/dto/DetailedProductDTO";
import withQueryHandling from "./withQueryHandling";
import DetailGridLayout from "@/layout/DetailGridLayout";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";

function ProductDetail({
  data,
  addToCart,
}: {
  data: DetailedProductDTO;
  addToCart: (productId: string, onSuccess: () => void) => void;
}) {
  const [selectedImgIndex, setSelectedImgIndex] = useState(0);

  const navigate = useNavigate();

  const queryClient = useQueryClient();

  function handleAddToCart() {
    const onSuccessCallback = async () => {
      await queryClient.resetQueries({ queryKey: ["cart"] });
      navigate("/cart");
    };
    addToCart(data._id, onSuccessCallback);
  }

  return (
    <DetailGridLayout>
      <>
        <div className="flex flex-col gap-2 overflow-y-scroll">
          {[1, 2, 3, 4, 5].map((_, index) => {
            return data.images.map((src: string) => {
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
          <img src={data.images[selectedImgIndex]} className="object-contain" alt="product preview image"></img>
        </div>
        <div className=" col-span-3 xl:col-span-1 flex gap-5 flex-col">
          <h1 className="font-bold">{data.title}</h1>
          <Badge className="w-fit p-1 text-center" variant={"secondary"}>
            {data.category}
          </Badge>
          <h1>{data.description}</h1>
          <p>₹{data.price}</p>
          <div className="flex flex-row items-center justify-evenly gap-3 w-full">
            <Button className="w-1/2">Buy now</Button>
            <Button className="w-1/2" variant={"outline"} onClick={handleAddToCart}>
              <ShoppingCart className="size-[1.5rem] min-w-[1.5rem]" />
              Add to card
            </Button>
          </div>
        </div>
      </>
    </DetailGridLayout>
  );
}

const EnhancedProductDetail = withQueryHandling<
  DetailedProductDTO,
  { addToCart: (productId: string, onSuccess: () => void) => void }
>(ProductDetail);

export default EnhancedProductDetail;
