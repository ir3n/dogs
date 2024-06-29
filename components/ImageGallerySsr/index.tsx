import React from "react";
import ImageGrid from "../ImageGrid";

export type ApiResponse = {
  ok: Boolean;
  status: "success" | "error";
  statusText: String;
  message: [];
};

const getData = async (): Promise<ApiResponse> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/random/9`);

  if (!res.ok) {
    console.log(`Failed to fetch data: ${res.statusText}`);
  }

  return res.json();
};

export default async function ImageGallerySsr() {
  const resp = await getData();
  const images: [] = resp?.message;

  if (resp?.status === "error") {
    return (
      <div className="py-10 ">
        <p>Oops, sorry, something went wrong.</p>
        <p>No dogs for you right now...</p>
      </div>
    );
  }

  if (images?.length) {
    return <ImageGrid images={images} />;
  }
}
