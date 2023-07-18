import Link from "next/link";
import { HTMLAttributes } from "react";

interface LinkProps extends HTMLAttributes<HTMLAnchorElement> {
  href: string,
  title: string,
}

export function LinkNav(props: LinkProps) {
  return (
    <Link
      className="border hover:bg-gray-400 hover:border-gray-400 hover:text-white border-gray-300 duration-500 rounded-full
        lg:py-1.5 md:py-1 sm:py-1
        lg:px-5 md:px-4 sm:px-4
        2xl:text-lg xl:text-base lg:text-sm md:text-[10px] sm:text-[8px]
      "
      {...props}
    >
      {props.title}
    </Link>
  )
}