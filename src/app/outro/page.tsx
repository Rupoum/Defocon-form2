import React from "react";
import Icon from "../../../public/asstes/icons/mlsa.png";
import Image from "next/image";
import { Button } from "@mui/material";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
const Outro = () => {
  return (
    <div className="h-screen w-screen flex gap-2 flex-col justify-center items-center">
      <Image src={Icon} alt="Icon" />
      <h1 className="font-bold md:text-3xl text-xl mb-12 mt-12 text-center">
        Thanks For Submitting!
      </h1>
      <Link href="/" className={buttonVariants({ variant: "default" })}>
        Go home
      </Link>
    </div>
  );
};

export default Outro;
