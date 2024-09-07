import { Card, CardContent, CardHeader } from "@/components/ui/card";
import products from "../../public/formatedProducts.json";
import { Button } from "@/components/ui/button";

function CartPage() {
  return (
    <div className="flex gap-5 flex-col-reverse lg:flex-row">
      <div className="flex flex-col flex-1 gap-5">
        {products.map((product) => {
          return (
            <Card className="h-56 p-5 flex gap-5">
              <img src={product.image} className="object-contain h-[90%] w-16 sm:w-32" />
              <div className="p-2 flex-1 relative">
                <div className="flex justify-between flex-col sm:flex-row">
                  <p className="font-medium text-sm">{product.title}</p>
                  <p>
                    <h4>₹{product.price}</h4>
                  </p>
                </div>
                <p>some content will come here</p>
                <div className="flex gap-2 absolute bottom-[8px]">
                  <Button>Buy now</Button>
                  <Button variant={"outline"}>Remove</Button>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
      <div className="max-h-[200px] w-[100%] lg:w-[400px]">
        <Card>
          <CardHeader>
            <h1>Cart Detail</h1>
          </CardHeader>
          <CardContent>
            <p></p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default CartPage;
