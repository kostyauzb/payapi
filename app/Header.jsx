import React from "react";
import Navbar from "./Navbar";
import tel from "../public/tel.svg";
import nav from "../public/nav.svg";
import Image from "next/image";
import Link from "next/link";
const Header = () => {
  return (
    <div>
      <Navbar />
      <div className="header container">
        <div className="start">
          <div className="start_titles">
            <h1>
              Start building <br /> with our APIs for absolutely free.
            </h1>
            <div className="inp_btn">
              <input
                className="inp_start"
                type="text"
                placeholder="   Enter email address"
              />
              <button className="btn_start">Schedule a Demo</button>
              <h4 className="title_link">
                Have any questions?
                <Link className="lnk" href={"/contact"}>
                  Contact us
                </Link>
              </h4>
            </div>
          </div>
          <div className="telephone">
            <Image src={tel} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
