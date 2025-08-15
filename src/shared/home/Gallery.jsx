import CircularGallery from "@/components/CircularGallery/CircularGallery";
import SplitText from "@/components/SplitText/SplitText";

const Gallery = () => {
  return (
    <section className="h-screen flex flex-col w-screen justify-center items-center">
      <SplitText
        as="h1"
        delay={2}
        text={"Gallery"}
        duration={1}
        splitType="chars"
        className="text-9xl text-white font-[Tangerine] p-10 mb-10"
      />

      <CircularGallery
        bend={3}
        textColor="#ffffff"
        borderRadius={0}
        scrollEase={0.02}
      />
    </section>
  );
};

export default Gallery;
