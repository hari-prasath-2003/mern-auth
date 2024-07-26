import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Skeleton } from "../ui/skeleton";

export default function ProductCardLoading() {
  return (
    <Card className="min-w-[250px] w-[min-content]">
      <CardHeader>
        <Skeleton className="h-[170px]" />
      </CardHeader>

      <CardContent className="p-6 flex flex-col gap-2">
        <Skeleton className="h-[3rem]" />
        <Skeleton className=" h-[1.5rem]" />
        {/* <Skeleton className="w-[50%] h-[1.5rem]" /> */}
      </CardContent>
      {/* <CardFooter>
        <div className="flex flex-1 items-center justify-evenly gap-3">
          <Skeleton className="h-[2.25rem] w-1/2" />
          <Skeleton className="h-[2.25rem] w-1/2" />
        </div>
      </CardFooter> */}
    </Card>
  );
}
