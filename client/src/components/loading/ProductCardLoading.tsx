import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "../ui/skeleton";

export default function ProductCardLoading() {
  return (
    <Card className="min-w-[300px]">
      <CardHeader>
        <Skeleton className="h-[170px]" />
      </CardHeader>

      <CardContent className="p-6 flex flex-col gap-2">
        <Skeleton className="h-[3rem]" />
        <Skeleton className=" h-[1.5rem]" />
      </CardContent>
    </Card>
  );
}
