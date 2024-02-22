import React from "react";
import navbar from "./Navbar";
import Image from "next/image";
import Link from "next/link";
import Header from "./Header";
import tesla from "../public/tesla.svg";
import oracle from "../public/oracle.svg";
import microsoft from "../public/microsoft.svg";
import hp from "../public/hp.svg";
import google from "../public/google.svg";
import nvidia from "../public/nvidia.svg";
const Work = () => {
  return (
    <>
      <div className="work-main">
        <div className="container">
          <div className="animatsiya">
            <div className="work_title">
              <h3>Who we work with</h3>
              <p>
                Today, millions of people around the world have successfully
                connected their accounts to apps they love using our API. We
                provide developers with the tools they need to create easy and
                accessible experiences for their users.
              </p>
              <button>
                <Link href={"/About"}>About us</Link>
              </button>
            </div>
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
      </div>
    </>
  );
};

export default Work;
