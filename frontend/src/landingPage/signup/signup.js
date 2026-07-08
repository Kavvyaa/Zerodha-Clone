import React from "react";
import Hero from "./Hero";
import InvestmentOptions from "./InvestmentOptions";
import Steps from "./Steps";
import Benefits from "./Benefits";
import AccountTypes from "./AccountTypes";
import Faq from "./Faq";
import OpenAccount from "../OpenAccount";
import "./Signup.css";

function Signup() {
  return (
    <>
      <Hero />
      <InvestmentOptions />
      <Steps />
      <Benefits />
      <AccountTypes />
      <Faq />
      <OpenAccount />
    </>
  );
}

export default Signup;
