import React from "react";
import Image from "next/image";
import Link from "next/link";
import tel from "../public/tel.svg";
import nav from "../public/nav.svg";
const navbar = () => {
  return (
    <div className="navbar container">
      <Image className="nav_logo" src={nav} alt="" />
      <ul>
        <li>
          <Link href={"/pricing"}>Pricing</Link>
        </li>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li>
          <Link href={"/contact"}>Contact</Link>
        </li>
      </ul>
      <button className="btn_nav">Schedule a Demo</button>
    </div>
  );
};

export default navbar;
