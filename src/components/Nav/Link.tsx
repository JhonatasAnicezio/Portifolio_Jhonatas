import Link from "next/link";
import { HTMLAttributes } from "react";

interface LinkProps extends HTMLAttributes<HTMLAnchorElement> {
  href: string,
  title: string,
}

export function LinkNav(props: LinkProps) {
  return (
    <Link
      className="text-xs border hover:bg-gray-400 hover:border-gray-400 hover:text-white border-gray-300 duration-500 rounded-full py-1.5 px-5"
      {...props}
    >
      {props.title}
    </Link>
  )
}