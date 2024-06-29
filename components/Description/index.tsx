import React from "react";

function Description({ text }: { text: string }) {
  return (
    <div className="my-5 lg:my-10">
      <p>{text}</p>
    </div>
  );
}

export default Description;
