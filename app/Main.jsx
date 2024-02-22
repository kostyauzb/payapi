import React from "react";
import bloc from "../public/bloc.svg";
import jap from "../public/jap.svg";
import personal from "../public/personal.svg";
import bank from "../public/bank.svg";
import consumer from "../public/consumer.svg";
import Image from "next/image";
const Main = () => {
  return (
    <>
      <div className="container">
        <div className="img_div">
          <Image src={bloc} alt="" />
          <div className="main_titles">
            <h3>Easy to implement</h3>
            <p>
              Our API comes with just a few lines of code. You’ll be up and
              running in no time. We built our documentation page to integrate
              payments functionality with ease.
            </p>
          </div>
        </div>

        <div className="tit_div">
          <div className="tit_titles">
            <h3>Simple UI & UX</h3>
            <p>
              Our pre-built form is easy to integrate in your app or website’s
              checkout flow and designed to optimize conversion.{" "}
            </p>
          </div>
          <div className="tel_rasm2">
            <Image src={jap} alt="" />
          </div>
        </div>

        <div className="personal3">
          <div className="personal">
            <Image src={personal} alt="" />
            <h5>Personal Finances</h5>
            <p>
              Consolidate financial data from multiple sources and categorize
              transactions up to 2 years of history. Analyze reports to
              reconcile activities in your account.{" "}
            </p>
          </div>

          <div className="personal">
            <Image src={bank} alt="" />
            <h5>Banking & Coverage</h5>
            <p>
              With our platform, you can speed up account onboarding and support
              ongoing payments for checking, savings, credit card, and brokerage
              accounts.
            </p>
          </div>

          <div className="personal">
            <Image src={consumer} alt="" />
            <h5>Consumer Payments</h5>
            <p>
              It’s easier to set up secure bank payments with us through a flow
              designed with the user experience in mind. Customers could
              instantly authenticate their account.
            </p>
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
    </>
  );
};

export default Main;
