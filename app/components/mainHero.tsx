import { Dancing_Script } from "next/font/google";
import { Roboto } from "next/font/google";

const dancingScript = Dancing_Script({ subsets: ["latin"] });

const Hero = () => {
  return (
    <div className={`flex items-center justify-center h-2/5 w-full px-5`}>
      <h1 className="text-white text-4xl md:text-5xl lg:text-6xl min-[1300px]:text-7xl text-center mb-8">
        Want to <span className="text-[#0E585F]">fly?</span> We'll be your{" "}
        <span
          className={`${dancingScript.className} text-6xl md:text-7xl lg:text-8xl min-[1300px]:text-9xl font-semibold `}
        >
          Wings!
        </span>
      </h1>
    </div>
  );
};
export default Hero;
