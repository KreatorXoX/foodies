import Image from "next/image";
import Link from "next/link";
import React from "react";

import logoImage from "@/assets/logo.png";

type Props = {};

const Logo = (props: Props) => {
  return (
    <Link href={"/"}>
      <Image src={logoImage} alt="logo" width={70} priority />
    </Link>
  );
};

export default Logo;
