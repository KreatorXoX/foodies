import React from "react";

import Navbar from "./navbar";
import Logo from "./logo";

type Props = {};

const MainHeader = (props: Props) => {
  return (
    <div className="w-full fixed top-0 md:text-xl z-10 bg-inherit ">
      <div className="w-full max-w-7xl mx-auto flex justify-center md:justify-between py-4 md:py-0 px-8 truncate">
        <div className="md:block hidden">
          <Logo />
        </div>

        <Navbar />
      </div>
    </div>
  );
};

export default MainHeader;
