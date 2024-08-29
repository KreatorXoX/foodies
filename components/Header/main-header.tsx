import React from "react";

import Navbar from "./navbar";
import Logo from "./logo";

type Props = {};

const MainHeader = (props: Props) => {
  return (
    <div className="w-full fixed top-0 py-2 shadow-blue-900 shadow-md text-2xl">
      <div className="w-full max-w-7xl mx-auto flex justify-center md:justify-between p-8 md:py-2 truncate">
        <div className="md:block hidden">
          <Logo />
        </div>

        <Navbar />
      </div>
    </div>
  );
};

export default MainHeader;
