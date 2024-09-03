"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Props = { href: string; children: string };

const NavLink = ({ href, children }: Props) => {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`
    hover:text-yellow-600 transition
     ${isActive ? "underline underline-offset-4 text-yellow-600" : ""}`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
