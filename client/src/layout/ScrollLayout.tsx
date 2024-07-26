function ScrollLayout({ children }) {
  return <div className="flex flex-nowrap w-full overflow-x-scroll gap-5">{children}</div>;
}

export default ScrollLayout;
