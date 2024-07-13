"use client";
import { useEffect, useState } from "react";
import ImageGrid from "../ImageGrid";
import Description from "../Description";
import LoadingGrid from "../ImageGrid/LoadingGrid";

export default function ImageGalleryCsr() {
  const [images, setImages] = useState<[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const getData = async (): Promise<void> => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/random/9`);

      if (!res.ok) {
        throw new Error("Oops, sorry! No dogs for you right know...");
      }
      const data = await res.json();

      setImages(data?.message);
      setLoading(false);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("Oops, sorry! An unknown error occurred...");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) return <LoadingGrid />;

  if (error) return <div className="py-5 md:py-10">{error}</div>;

  return (
    <>
      <ImageGrid images={images} />
      <Description
        text="These images are coming from a client component. That means that, there
        is a call to the API when we navigate to this component, so the images
        change each time."
      />
    </>
  );
}
