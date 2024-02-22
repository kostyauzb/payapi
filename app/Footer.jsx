import React from "react";
import Image from "next/image";
import Link from "next/link";
import footer from "../public/footer.svg";
import fec from "../public/fec.svg";
import twiter from "../public/twiter.svg";
import inm from "../public/inm.svg";

const Footer = () => {
  return (
    <>
      <div className="foter">
        <div className="container">
          <div className="hamasi">
            <Image className="fote_log" src={footer} alt="" />
            <Link className="foter_tit" href={"/pricing"}>
              Pricing
            </Link>
            <Link className="foter_tit" href={"/about"}>
              About
            </Link>
            <Link className="foter_tit" href={"/contact"}>
              Contact
            </Link>
            <div className="imgff">
              <Image className="fote_img" src={fec} alt="" />
              <Image className="fote_img" src={twiter} alt="" />
              <Image className="fote_img" src={inm} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
