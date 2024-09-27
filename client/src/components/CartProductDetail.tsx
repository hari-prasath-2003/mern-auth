import { Button } from "./ui/button";
import { Card } from "./ui/card";
import CartProductDTO from "../../../shared/dto/CartProductDTO";
import { useEffect, useState } from "react";

function CartProductDetail({
  product,
  updateProductQuantity,
  removeProductFromCart,
}: {
  product: CartProductDTO;
  updateProductQuantity: (productId: string, newQuantity: number) => void;
  removeProductFromCart: (productId: string) => void;
}) {
  const [quantity, setQuantity] = useState(product.quantity);

  useEffect(() => {
    console.log(quantity, product.quantity);

    if (quantity === product.quantity) return;

    const debounceTimer = setTimeout(() => {
      updateProductQuantity(product._id, quantity);
    }, 2000);

    return () => clearTimeout(debounceTimer);
  }, [quantity, product.quantity, product._id, updateProductQuantity]);

  function increaseQuantity() {
    setQuantity((prev) => prev + 1);
  }

  function decreaseQuantity() {
    setQuantity((prev) => prev - 1);
  }

  return (
    <Card className="h-56 p-5 flex gap-5">
      <img src={product.coverImage} className="object-contain h-full w-16 sm:w-32" />
      <div className="p-2 flex-1 relative">
        <div className="flex justify-between flex-col sm:flex-row">
          <p className="font-medium text-sm">{product.title}</p>
          <h4>₹{product.sellingPrice}</h4>
        </div>
        <div className="flex gap-2 align-middle">
          <Button onClick={increaseQuantity}>+</Button>
          <p className="my-auto">{product.quantity}</p>
          <Button onClick={decreaseQuantity}>-</Button>
        </div>
        <div className="flex gap-2 absolute bottom-[0px]">
          <Button>Buy now</Button>
          <Button variant={"outline"} onClick={() => removeProductFromCart(product._id)}>
            Remove
          </Button>
        </div>
      </div>
    </Card>
  );
}

export default CartProductDetail;
