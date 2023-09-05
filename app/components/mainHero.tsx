import { Dancing_Script } from "next/font/google";

const dancingScript = Dancing_Script({ subsets: ["latin"] });

const Hero = () => {
  return (
    <div className={`flex items-center justify-center h-2/5 w-full`}>
      <h1 className="text-white text-6xl text-center mb-8">
        Want to <span className="text-[#0E585F]">fly?</span> We'll be your
        <span className={`${dancingScript.className} text-8xl font-semibold`}>
          Wings!
        </span>
      </h1>
    </div>
  );
};
export default Hero;
