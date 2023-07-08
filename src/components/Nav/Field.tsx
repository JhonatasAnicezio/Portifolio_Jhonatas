import { HTMLAttributes } from "react";

interface FieldProps extends HTMLAttributes<HTMLElement> {} 

export function Field(props: FieldProps) {
  return (
    <nav
      className="flex justify-center items-center gap-3"
      {...props}
    />
  )
}