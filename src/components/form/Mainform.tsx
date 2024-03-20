"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Name from "@/components/questions/Name";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Mail from "../questions/Mail";
import Phone from "../questions/Phone";
import Roll from "../questions/Roll";
import TryHackId from "../questions/TryHackId";
import Year from "../questions/Year";
import Rate from "../questions/Rate";
import { CreateUser } from "@/actions/form-submit";
import { UserSchema } from "@/lib/types";

function Mainform() {
  const [page, setPage] = useState(0);

  const components = [
    { Component: Name, name: "Name" },
    { Component: Mail, name: "Mail" },
    { Component: Phone, name: "Phone" },
    { Component: Roll, name: "Roll" },
    { Component: TryHackId, name: "TryHackId" },
    { Component: Year, name: "Year" },
    { Component: Rate, name: "Rate" },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    roll: "",
    id: "",
    year: "",
    rate: "",
  });

  const [errors, SetError] = useState<Zod.ZodError>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const progress = (page / (components.length - 1)) * 100;

  const formSubmit = async () => {
    const result = UserSchema.safeParse(formData);

    console.log(formData);

    if (!result.success) {
      console.log(result.error.issues);
      SetError(result.error);
      return;
    }

    await CreateUser(result.data);
  };

  const PageDisplay = () => {
    const Component = components[page].Component;
    return <Component handleChange={handleChange} key={page} />;
  };

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        if (page === components.length - 1) {
          alert("Form submitted");
        } else {
          setPage((currPage) => currPage + 1);
        }
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [page, components.length]);

  return (
    <div className="flex w-full h-full">
      <div className="w-full absolute overflow-hidden z-20 bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
        <div
          className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500 transition-all ease-linear"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <form
        action={formSubmit}
        className="w-full p-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
      >
        <AnimatePresence>
          <motion.div
            key={page}
            layoutId="card"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{
              duration: 0.75,
              // when: "beforeChildren", // Animate the parent div first
            }}
          >
            <Card className="px-5 sm:px-28 md:px-40 bg-black border-none overflow-hidden">
              <motion.div
                initial={{ opacity: 0, x: 100 }} // Initial state with opacity 0 and x position 100 (off-screen to the right)
                animate={{ opacity: 1, x: 0 }} // Animation to make the content appear with opacity 1 and x position 0
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 1 }} // Transition duration for the animation
              >
                <div className="">
                  <CardHeader>
                    <CardTitle className="flex text-white items-center">
                      <span className="text-xs">{page + 1}</span>
                      <span>
                        <Image
                          src={"/asstes/icons/arrow-white2.png"}
                          alt="arrow"
                          height={10}
                          width={15}
                        />
                      </span>
                      <span className="text-lg mx-2 font-normal">
                        {components[page].name}
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>{PageDisplay()}</CardContent>
                  <CardFooter className="flex gap-10">
                    <Button
                      size="sm"
                      disabled={page === 0}
                      className="bg-transparent text-white"
                      onClick={() => setPage((currPage) => currPage - 1)}
                    >
                      Go Back
                    </Button>
                    <Button
                      size="sm"
                      className="bg-transparent text-white"
                      type={
                        page === components.length - 1 ? "submit" : "button"
                      }
                      onClick={() => {
                        if (page === components.length - 1) {
                          alert("form submitted");
                        } else {
                          setPage((currPage) => currPage + 1);
                        }
                      }}
                    >
                      {page === components.length - 1 ? "Submit" : "Next"}
                    </Button>
                  </CardFooter>
                </div>
              </motion.div>
            </Card>
          </motion.div>
        </AnimatePresence>
      </form>
    </div>
  );
}

export default Mainform;
