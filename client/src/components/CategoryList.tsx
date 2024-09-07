import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

function CategoryList({ categories }: { categories: string[] }) {
  const navigate = useNavigate();
  return (
    <>
      {categories.map((category) => (
        <Badge
          className="text-nowrap w-fit p-2 text-center cursor-pointer font-semibold "
          variant={"secondary"}
          key={category}
          onClick={() => {
            navigate(`search?q=${category}`);
          }}
        >
          {category}
        </Badge>
      ))}
      .
    </>
  );
}

export default CategoryList;
