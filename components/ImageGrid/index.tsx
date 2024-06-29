import Image from "next/image";

function ImageGrid({ images }: { images: string[] }) {
  return (
    <>
      {images?.length ? (
        <div className="py-5 md:py-10 sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {images?.map((img, i) => (
            <div
              key={`dog-img-${i}`}
              className="rounded-md lg:rounded-xl overflow-hidden h-60 md:h-80 xl:h-96 mb-5 md:mb-0 bg-slate-800 hover:scale-[1.05] transition duration-500"
            >
              <Image
                src={img}
                alt="An awesome dog"
                width={500}
                height={500}
                className="block object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="py-5 md:py-10">Sorry, no images found this time...</div>
      )}
    </>
  );
}

export default ImageGrid;
