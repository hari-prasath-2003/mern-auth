import { Card, CardContent, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import CartDetailsDTO from "../../../shared/dto/CartDetailsDTO";
import CartDetailLoading from "./loading/CartDetailLoading";

type CartDetailProp = Omit<CartDetailsDTO, "products">;

function CartDetail({ data, isLoading, error }: { data: CartDetailProp; isLoading: boolean; error: Error | null }) {
  if (error) {
    return <div>{"error fetching cart detail"}</div>;
  }
  if (isLoading) {
    return <CartDetailLoading />;
  }
  return (
    <Card>
      <CardHeader>
        <h1 className="font-bold">Cart Detail</h1>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-7">
          <div className="flex justify-between">
            <h3>Price</h3>
            <h3>₹{data.cartPrice}</h3>
          </div>
          <div className="flex justify-between">
            <h3>Discount</h3>
            <h3>₹{data.totalDiscount}</h3>
          </div>
          <div className="flex justify-between">
            <h3>Delivery Charges</h3>
            <h3>₹{data.deliveryCharge}</h3>
          </div>
          <Separator />
          <div className="flex justify-between">
            <h3>Total Amount</h3>
            <div className="flex gap-2">
              <h3>₹{data.totalPrice}</h3>
              <p>
                ({data.totalPriceBeforeDeliveryCharge}+{data.deliveryCharge})
              </p>
            </div>
          </div>
          <Separator />
          <Button>Checkout</Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default CartDetail;
