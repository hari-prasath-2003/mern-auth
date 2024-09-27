import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

function CategoryBadge({ category }: { category: string }) {
  const navigate = useNavigate();
  return (
    <Badge
      className="text-nowrap w-fit p-2 text-center cursor-pointer font-semibold "
      variant={"secondary"}
      onClick={() => {
        navigate(`search?q=${encodeURIComponent(category)}`);
      }}
    >
      {category}
    </Badge>
  );
}

export default CategoryBadge;
