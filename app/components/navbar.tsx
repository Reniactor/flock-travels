import Link from "next/link";
import logo from "../../public/logo_transparent.png";
import Image from "next/image";
import { Dancing_Script, Montserrat } from "next/font/google";

const openSans = Montserrat({
  subsets: ["latin"],
});

const dancingScript = Dancing_Script({ subsets: ["latin"] });

const Navbar = () => {
  const links = [
    { name: "Our Values", route: "/ourValues" },
    { name: "Products", route: "/products" },
    { name: "Blog", route: "/blog" },
  ];
  return (
    <div className="fixed w-full h-[12%] text-[#0B1618] top-0 left-0 flex justify-between">
      <Image
        src={logo}
        alt={`Flock's logo`}
        className="h-full w-auto"
        draggable="false"
      />{" "}
      <ul
        className={`${openSans.className} hidden min-[1300px]:flex w-[30%] justify-between items-center text-xl px-4`}
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
          className={`bg-[#0B1618] rounded-full text-[#f3f3f3] font-extralight w-1/4 h-1/2 text-center flex items-center justify-center duration-500 hover:text-[#13292C] hover:bg-[#f3f3f3]`}
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
