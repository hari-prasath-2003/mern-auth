import React from "react";

function DetailGridLayout({ children }: { children: React.ReactElement }) {
  return (
    <div className="grid grid-cols-[60px_1fr] xl:grid-cols-[60px_2fr_1fr]  grid-rows-[calc(100vh-204px)_auto_1fr] gap-5">
      {children}
    </div>
  );
}

export default DetailGridLayout;
