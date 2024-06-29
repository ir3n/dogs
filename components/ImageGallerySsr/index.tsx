import React from "react";
import ImageGrid from "../ImageGrid";
import Description from "../Description";

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
    return (
      <>
        <ImageGrid images={images} />
        <Description
          text="These images are coming from a server component. That means that, as
          we navigate between the components, there is no call to the API and
          the images remain the same. Even if we refresh the page. However, if
          we want to see new images, we can do a hard refresh (Crl + Shift + R /
          Cmd + Shift + R)."
        />
      </>
    );
  }
}
