import { Skeleton } from "../ui/skeleton";

function CategoryBadgeLoading() {
  const skeletonCount = 30;

  return (
    <>
      {Array(skeletonCount)
        .fill(null)
        .map((_, index) => (
          <div key={index}>
            <Skeleton className="w-20 h-8" />
          </div>
        ))}
    </>
  );
}

export default CategoryBadgeLoading;
