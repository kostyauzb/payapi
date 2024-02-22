import tel from "../public/tel.svg";
import nav from "../public/nav.svg";
import pricing from "../app/pricing/page";
import about from "../app/about/page";
import contact from "../app/contact/page";
import Work from "./Work";
import Image from "next/image";
import Link from "next/link";
import Header from "@/app/Header";
import Main from "./Main";
import Footer from "./Footer";
const page = () => {
  return (
    <>
      <Header />
      <Work />
      <Main />
      <Footer />
    </>
  );
};

export default page;
