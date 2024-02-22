import React from "react";
import Image from "next/image";
import Link from "next/link";
import nav from "../../public/nav.svg";
import css from "../contact/contact.css";
import footer from "../../public/footer.svg";
import fec from "../../public/fec.svg";
import twiter from "../../public/twiter.svg";
import inm from "../../public/inm.svg";
import tesla from "../../public/tesla.qora.svg";
import oracle from "../../public/oracle.qora.svg";
import microsoft from "../../public/microsoft.qora.svg";
import hp from "../../public/hp.qora.svg";
import google from "../../public/google.qora.svg";
import nvidia from "../../public/nvidia.qora.svg";

const page = () => {
  return (
    <>
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
      <div className="title_contact container">
        <h1>Submit a help request and we’ll get in touch shortly.</h1>
        <div className="inp_title">
          <div className="inp_div">
            <input type="text" className="inp" placeholder="      Name" id="" />
            <input
              type="email"
              className="inp"
              placeholder="      Email Adress"
              id=""
            />
            <input
              type="text"
              className="inp"
              placeholder="      Company Name"
              id=""
            />

            <input
              type="text"
              className="inp"
              placeholder="      Title"
              id=""
            />
            <input
              type="text"
              className="inp"
              placeholder="      Message"
              id=""
            />
            <div className="cek_kilich">
              <input type="checkbox" className="chekbox" id="" />
              <h2>
                Stay up-to-date with company announcements and updates to our
                API
              </h2>
            </div>
            <button className="bnt_sub">Submit</button>
          </div>
          <div className="chap_div">
            <h4>
              Join the thousands of innovators that are already building with us
            </h4>
            <div className="kompaniyalar">
              <div className="tesla">
                <Image src={tesla} alt="" />
                <Image src={microsoft} alt="" />
                <Image src={hp} alt="" />
              </div>
              <div className="oracle">
                <Image src={oracle} alt="" />
                <Image src={google} alt="" />
                <Image src={nvidia} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="past">
          <h1>Ready to start?</h1>
          <input
            className="inp_start"
            type="text"
            placeholder="   Enter email address"
          />
          <button className="btn_start">Schedule a Demo</button>
        </div>
      </div>
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

export default page;
