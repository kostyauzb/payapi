import React from "react";
import Image from "next/image";
import Link from "next/link";
import nav from "../../public/nav.svg";
import css from "../about/abou.css";
import footer from "../../public/footer.svg";
import fec from "../../public/fec.svg";
import twiter from "../../public/twiter.svg";
import inm from "../../public/inm.svg";
import con from "../../public/con_img.svg";

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
      <div className="about container">
        <div className="about_title">
          <h1>
            We empower innovators by delivering access to the <br /> financial
            system
          </h1>
          <div className="our">
            <h3>Our Version</h3>
            <p>
              Our main goal is to build beautiful consumer experiences along
              with developer-friendly infrastructure. The result is an
              intelligent tool that gives everyone the ability to create amazing
              products that solve big problems. We are deeply focused on
              democratizing financial services through technology.{" "}
            </p>
          </div>
          <div className="our">
            <h3>Our Business</h3>
            <p>
              At the core of our platform is the technical infrastructure APIs
              that connect consumers. Our innovative product provides key
              insights for businesses and individuals, as well as robust
              reporting for traditional financial institutions and developers.{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="img_con">
        <Image src={con} alt="" />
      </div>
      <div className="shart container">
        <div className="fozi_300">
          <div className="foiz">
            <div className="chiziq"></div>
            <h4>Team Members</h4>
            <h1>300+</h1>
            <div className="chiziq"></div>
          </div>

          <div className="foiz">
            <div className="chiziq"></div>
            <h4>Offices in the US</h4>
            <h1>3</h1>
            <div className="chiziq"></div>
          </div>

          <div className="foiz">
            <div className="chiziq"></div>
            <h4>Transactions analyzed</h4>
            <h1>10M+</h1>
            <div className="chiziq"></div>
          </div>
        </div>
        <div className="our">
          <h3>The Culture</h3>
          <p>
            We strongly believe there's always an opportunity to learn from each
            other outside of day-to-day work, whether it's company-wide
            offsites, internal hackathons, or co-worker meetups. We always value
            cross-team collaboration and diversity of thought, no matter the job
            title.
          </p>
        </div>
        <div className="our">
          <h3>The People</h3>
          <p>
            We're all passionate about building a more efficient and inclusive
            financial infrastructure together. At PayAPI, we have diverse
            backgrounds and skills.
          </p>
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
