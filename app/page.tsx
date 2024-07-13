import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ImageGallerySsr from "@/components/ImageGallerySsr";
import ImageGalleryCsr from "@/components/ImageGalleryCsr";
import { Suspense } from "react";
import LoadingGrid from "@/components/ImageGrid/LoadingGrid";

export default function Home() {
  return (
    <>
      <h1 className="font-bold text-3xl lg:text-5xl">
        Here are some dogs to make your day!
      </h1>

      <Tabs defaultValue="ssr" className="mt-5 md:mt-10">
        <TabsList>
          <TabsTrigger value="ssr">Images SSR</TabsTrigger>
          <TabsTrigger value="csr">Images CSR</TabsTrigger>
        </TabsList>
        <TabsContent value="ssr">
          <Suspense fallback={<LoadingGrid />}>
            <ImageGallerySsr />
          </Suspense>
        </TabsContent>
        <TabsContent value="csr">
          <ImageGalleryCsr />
        </TabsContent>
      </Tabs>
    </>
  );
}
