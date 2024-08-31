import React from "react";
import Navlink from "./navlink";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="flex gap-10 items-center">
      <Navlink href={"/meals"}>Meals</Navlink>
      <Navlink href={"/about"}>About Us</Navlink>
      <Navlink href={"/community"}>Community</Navlink>
    </nav>
  );
};

export default Navbar;
