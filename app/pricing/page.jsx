import React from "react";
import Image from "next/image";
import Link from "next/link";
import css from "../pricing/pricing.css";
import nav from "../../public/nav.svg";
import chek from "../../public/chek.svg";
import footer from "../../public/footer.svg";
import fec from "../../public/fec.svg";
import twiter from "../../public/twiter.svg";
import inm from "../../public/inm.svg";
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
      <div className="pricing container">
        <h1>Pricing</h1>
        <div className="palnss">
          <div className="fre_palns">
            <h3>Free Plan</h3>
            <p>
              Build and test using our core set of products with up to 100 API
              requests{" "}
            </p>
            <h1>$0.00</h1>
            <div className="chiziq"></div>
            <div className="cheklar">
              <Image className="chek" src={chek} alt="" />
              <h5>Transactions</h5>
            </div>

            <div className="cheklar">
              <Image className="chek" src={chek} alt="" />
              <h5>Auth</h5>
            </div>

            <div className="cheklar">
              <Image className="chek" src={chek} alt="" />
              <h5>Identity</h5>
            </div>
            <h6 className="chek_titles">Investments</h6>
            <h6 className="chek_titles">Assets</h6>
            <h6 className="chek_titles">Liabilities</h6>
            <h6 className="chek_titles">Income</h6>
            <div className="chiziq"></div>
            <button className="chek_btn">Request Access</button>
          </div>

          <div className="fre_palns">
            <h3>Free Plan</h3>
            <p>
              Build and test using our core set of products with up to 100 API
              requests{" "}
            </p>
            <h1>$249.00</h1>
            <div className="chiziq"></div>
            <div className="cheklar">
              <Image className="chek" src={chek} alt="" />
              <h5>Transactions</h5>
            </div>

            <div className="cheklar">
              <Image className="chek" src={chek} alt="" />
              <h5>Auth</h5>
            </div>

            <div className="cheklar">
              <Image className="chek" src={chek} alt="" />
              <h5>Identity</h5>
            </div>

            <div className="cheklar">
              <Image className="chek" src={chek} alt="" />
              <h5>Investments</h5>
            </div>

            <div className="cheklar">
              <Image className="chek" src={chek} alt="" />
              <h5>Assets</h5>
            </div>

            <h6 className="chek_titles">Liabilities</h6>
            <h6 className="chek_titles">Income</h6>
            <div className="chiziq"></div>
            <button className="chek_btn">Request Access</button>
          </div>

          <div className="fre_palns">
            <h3>Free Plan</h3>
            <p>
              Build and test using our core set of products with up to 100 API
              requests{" "}
            </p>
            <h1>$499.00</h1>
            <div className="chiziq"></div>
            <div className="cheklar">
              <Image className="chek" src={chek} alt="" />
              <h5>Transactions</h5>
            </div>

            <div className="cheklar">
              <Image className="chek" src={chek} alt="" />
              <h5>Auth</h5>
            </div>

            <div className="cheklar">
              <Image className="chek" src={chek} alt="" />
              <h5>Identity</h5>
            </div>

            <div className="cheklar">
              <Image className="chek" src={chek} alt="" />
              <h5>Investments</h5>
            </div>

            <div className="cheklar">
              <Image className="chek" src={chek} alt="" />
              <h5>Assets</h5>
            </div>

            <div className="cheklar">
              <Image className="chek" src={chek} alt="" />
              <h5>Liabilities</h5>
            </div>

            <div className="cheklar">
              <Image className="chek" src={chek} alt="" />
              <h5>Income</h5>
            </div>
            <div className="chiziq"></div>
            <button className="chek_btn">Request Access</button>
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
      {/* ///////////////////////////////////////////////////// footer */}
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
