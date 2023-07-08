import Link from "next/link";
import { HTMLAttributes } from "react";

interface LinkProps extends HTMLAttributes<HTMLAnchorElement> {
  href: string,
  title: string,
}

export function LinkNav(props: LinkProps) {
  return (
    <Link
      className="border hover:bg-gray-400 hover:border-gray-400 hover:text-white border-gray-300 duration-500 rounded-full py-2 px-8"
      {...props}
    >
      {props.title}
    </Link>
  )
}