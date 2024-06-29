import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ImageGallerySsr from "@/components/ImageGallerySsr";
import ImageGalleryCsr from "@/components/ImageGalleryCsr";

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
          <ImageGallerySsr />
        </TabsContent>
        <TabsContent value="csr">
          <ImageGalleryCsr />
        </TabsContent>
      </Tabs>
    </>
  );
}
