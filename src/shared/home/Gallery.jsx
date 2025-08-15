import CircularGallery from "@/components/CircularGallery/CircularGallery"

const Gallery = () => {
  return (
          <section className=" h-screen flex items-end">
        {/* <SplitText
          as="h1"
          delay={2}
          text={"this is textd fdfhgfdg"}
          duration={1}
          splitType="chars"
          className=" text-9xl text-white"
        /> */}
        <CircularGallery
          bend={3}
          textColor="#ffffff"
          borderRadius={0}
          scrollEase={0.02}
        />
      </section>
   
  )
}

export default Gallery