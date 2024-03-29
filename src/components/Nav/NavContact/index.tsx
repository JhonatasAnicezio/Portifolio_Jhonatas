import { DiGithubBadge } from "react-icons/di";
import { Nav } from "..";
import { BiLogoLinkedin, BiSolidFile } from "react-icons/bi";
import Link from "next/link";

export function NavContact() {
  return (
    <Nav.Field className='flex items-center justify-center gap-4 text-gray-400
        2xl:text-5xl xl:text-4xl lg:text-4xl md:text-3xl sm:text-2xl text-3xl
      '
    >
      <Link target="blank" className='hover:text-black duration-500' href='https://github.com/JhonatasAnicezio'>
        <DiGithubBadge />
      </Link>
      <Link target="blank" className='hover:text-blue-700 duration-500' href='https://www.linkedin.com/in/jhonatas-anicezio/'>
        <BiLogoLinkedin />
      </Link>
      <Link target="blank" className='hover:text-red-600 duration-500' href=''>
        <BiSolidFile />
      </Link>
    </Nav.Field>
  );
}