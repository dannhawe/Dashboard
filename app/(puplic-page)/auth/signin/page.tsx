import React from "react";
import { Metadata } from "next";
import SigninLeft from "./_component/loginPage-left";
import SigninRight from "./_component/signin-right";
export const metadata: Metadata = {
  title: "Signin Page | Next.js E-commerce Dashboard Template",
  description: "This is Signin page for TailAdmin Next.js",
  // other metadata
};

const SignIn: React.FC = () => {
  return (
    <>
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="flex flex-wrap items-center">
          <SigninLeft />
          <SigninRight />
        </div>
      </div>
    </>
  );
};

export default SignIn;
