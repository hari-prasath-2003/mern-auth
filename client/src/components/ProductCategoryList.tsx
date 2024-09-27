import ScrollLayout from "@/layout/ScrollLayout";
import CategoryBadge from "./CategoryBadge";
import withQueryHandling from "./withQueryHandling";

function ProductCategoryList({ data }: { data: string[] }) {
  return (
    <ScrollLayout>
      {data?.map((category) => (
        <CategoryBadge key={category} category={category} />
      ))}
    </ScrollLayout>
  );
}

const EnhancedCategoryList = withQueryHandling<string[]>(ProductCategoryList);

export default EnhancedCategoryList;
