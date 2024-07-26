function ProductGridLayout({ children }) {
  return <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5">{children}</div>;
}

export default ProductGridLayout;
