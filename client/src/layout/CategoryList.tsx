import { Badge } from "@/components/ui/badge";

function CategoryList({ categories }: { categories: string[] }) {
  return (
    <>
      {categories.map((category) => (
        <Badge
          className="text-nowrap w-fit p-2 text-center cursor-pointer font-semibold "
          variant={"secondary"}
          onClick={() => {}}
        >
          {category}
        </Badge>
      ))}
      .
    </>
  );
}

export default CategoryList;
