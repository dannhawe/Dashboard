import IconLogin from "@/icons/iconLogin";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function SigninLeft() {
  return (
    <div className="hidden w-full xl:block xl:w-1/2">
      <div className="px-26 py-17.5 text-center">
        <Link className="mb-5.5 inline-block" href="/">
          <h1 className="text-2xl font-semibold text-white">Shakib Admin</h1>
          <Image
            className="dark:hidden"
            src={"/images/logo/logo-dark.svg"}
            alt="Logo"
            width={176}
            height={32}
          />
        </Link>

        <p className="2xl:px-20">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit suspendisse.
        </p>

        <IconLogin className="mt-15 inline-block" />
      </div>
    </div>
  );
}
