import { ReactNode } from "react";

function ProductGridLayout({ children }: { children: ReactNode }) {
  return <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-5">{children}</div>;
}

export default ProductGridLayout;
