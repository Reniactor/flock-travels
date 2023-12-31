import Link from "next/link";
import logo from "../../public/logo_transparent.png";
import Image from "next/image";
import { Dancing_Script, Great_Vibes, Montserrat } from "next/font/google";
import MenuButton from "./menuButton";

const openSans = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const dancingScript = Dancing_Script({ subsets: ["latin"] });

const greatVibes = Great_Vibes({ weight: ["400"], subsets: ["latin"] });

const Navbar = () => {
  const links = [
    { name: "About Us", route: "#aboutUs" },
    { name: "Reviews", route: "#reviews" },
    { name: "Blog", route: "/blog" },
  ];
  return (
    <div className="fixed w-full h-[12%] text-[#0B1618] top-0 left-0 flex justify-between items-center">
      <Image
        src={logo}
        alt={`Flock's logo`}
        className="h-full w-auto"
        draggable="false"
      />{" "}
      <MenuButton />
      <ul
        className={`${openSans.className} hidden min-[1450px]:flex w-[30%] h-[50%] justify-between items-center text-xl px-4`}
      >
        {links.map(({ name, route }, index) => {
          return (
            <Link
              href={route}
              key={index}
              className="hover:text-white duration-500 "
            >
              {name}
            </Link>
          );
        })}
        <Link
          href={"/reserveFlight"}
          className={`${openSans.className} bg-[#F26430] rounded-full text-[#FFF] font-semibold w-1/4 h-4/5 text-center flex items-center justify-center duration-500 hover:text-[#13292C] hover:bg-[#f3f3f3]`}
        >
          Jet Off
        </Link>
      </ul>
    </div>
  );

  {
    /* <div className="w-full h-1/6">
    <Image src={logo} alt={`Flock's logo`} className='h-full w-auto' /> 
    <ul>
        {links.map(({ name, route }), index) => 
        <Link href={route} key={index}>{name}</Link>}
    </ul>
  </div>; */
  }
};
export default Navbar;
