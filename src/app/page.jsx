import SplitText from "@/components/SplitText/SplitText";
export default function Home() {
  return (
    <main className="relative w-screen h-screen overflow-hidden">
      <video
        src="/hero.mp4"
        className="object-cover fixed -z-10 "
         autoPlay loop muted
      />
      <section className=" h-screen flex">
        <div className="w-1/2 br-test h-screen flex relative">
        </div>
        <div className="w-1/2 br-test h-screen flex">
        <SplitText text={"this is cool"} className="text-4xl" />
        </div>
      </section>
    </main>
  );
}
