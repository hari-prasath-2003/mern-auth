import { Card, CardContent, CardHeader } from "../ui/card";
import { Separator } from "../ui/separator";
import { Skeleton } from "../ui/skeleton";

function CartDetailLoading() {
  return (
    <Card>
      <CardHeader>
        <Skeleton className="w-full h-7" />
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-7">
          <div className="flex justify-between">
            <Skeleton className="w-[70%] h-6" />
            <Skeleton className="w-[20%] h-6" />
          </div>
          <div className="flex justify-between">
            <Skeleton className="w-[70%] h-6" />
            <Skeleton className="w-[20%] h-6" />
          </div>
          <div className="flex justify-between">
            <Skeleton className="w-[70%] h-6" />
            <Skeleton className="w-[20%] h-6" />
          </div>
          <Separator />
          <div className="flex justify-between">
            <Skeleton className="w-[100px] h-6" />
            <div className="flex gap-2">
              <Skeleton className="w-[100px] h-6" />
            </div>
          </div>
          <Separator />
          <Skeleton className="w-full h-9" />
        </div>
      </CardContent>
    </Card>
  );
}

export default CartDetailLoading;
