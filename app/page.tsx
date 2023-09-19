import Image from "next/image";
import Hero from "./components/mainHero";
import Navbar from "./components/navbar";
import FollowUpHero from "./components/followUpHero";

export default function Home() {
  return (
    <>
      <section
        className={` bg-hero-airplane bg-cover w-full min-h-screen flex items-center`}
      >
        <Navbar />
        <Hero />
      </section>
      <section className={`w-full min-h-screen flex items-center`}>
        <FollowUpHero />
      </section>
    </>
  );
}
