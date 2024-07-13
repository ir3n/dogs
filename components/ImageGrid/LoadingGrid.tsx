import React from "react";

function LoadingGrid() {
  return (
    <div className="py-5 md:py-10 sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {[...Array(9)].map((item, i) => (
        <div
          key={`placeholder-${i}`}
          className="rounded-md overflow-hidden h-60 md:h-80 mb-5 md:mb-0 bg-slate-800"
        ></div>
      ))}
    </div>
  );
}

export default LoadingGrid;
