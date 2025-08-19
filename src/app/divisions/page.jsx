import dynamic from "next/dynamic";
const Spinning = dynamic(() => import("@/shared/divisions/Spinning"), {
  loading: () => <p>Loading...</p>,
});
const Weaving = dynamic(() => import("@/shared/divisions/Weaving"), {
  loading: () => <p>Loading...</p>,
});
const Finishing = dynamic(() => import("@/shared/divisions/Finishing"), {
  loading: () => <p>Loading...</p>,
});
const Power = dynamic(() => import("@/shared/divisions/Power"), {
  loading: () => <p>Loading...</p>,
});

export default function Divisions() {
  return (
    <>
      <title>DIVISIONS</title>
      <main className="relative w-screen h-full">
        <Spinning />
        <Weaving />
        {/* <Finishing /> */}
        {/* <Power /> */}
      </main>
    </>
  );
}
