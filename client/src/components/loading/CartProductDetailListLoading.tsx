import { Card } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

function CartProductDetailListLoading() {
  return (
    <>
      {Array.from([1, 2, 3, 4, 5, 6, 7, 8, 9]).map((_, index) => {
        return (
          <Card className="h-56 p-5 flex gap-5" key={index}>
            <Skeleton className="object-contain h-full w-16 sm:w-32" />
            <div className="flex-1 relative flex flex-col gap-3">
              <div className="flex justify-between flex-col sm:flex-row gap-2">
                <Skeleton className="w-[80%] h-7" />
                <Skeleton className="w-[10%]" />
              </div>
              <div className="flex gap-2 align-middle">
                <Skeleton className="w-[40px] h-9" />
                <Skeleton className="w-[40px] h-9" />
                <Skeleton className="w-[40px] h-9" />
              </div>
              <div className="flex gap-2 absolute bottom-[0px]">
                <Skeleton className="w-[100px] h-9" />
                <Skeleton className="w-[100px] h-9" />
              </div>
            </div>
          </Card>
        );
      })}
    </>
  );
}

export default CartProductDetailListLoading;
