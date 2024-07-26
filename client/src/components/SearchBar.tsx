import { Input } from "@/components/ui/input";
import { X } from "lucide-react";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

function SearchBar() {
  const navigate = useNavigate();

  const [searchParam] = useSearchParams();

  const [searchQuery, setSearchQuery] = useState(() => searchParam.get("q"));

  function handleKeyDown(e) {
    if (!searchQuery) return;

    if (e.key === "Enter") {
      navigate(`/search?q=${searchQuery}`);
    }
  }

  function handleChange(e) {
    setSearchQuery(e.target.value);
  }

  function clearSearchBar() {
    setSearchQuery("");
  }

  return (
    <div className="my-5 flex-1 flex items-center lg:max-w-[500px]">
      <Input placeholder="Search product" onChange={handleChange} onKeyDown={handleKeyDown} value={searchQuery} />
      {searchQuery && <X onClick={clearSearchBar} className="cursor-pointer" />}
    </div>
  );
}

export default SearchBar;
