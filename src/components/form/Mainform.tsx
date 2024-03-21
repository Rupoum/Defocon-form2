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
import { User, UserSchema } from "@/lib/types";
import { useRouter } from "next/navigation";
import { z, ZodError } from "zod";
import { Toaster, toast } from "sonner";
import Spinner from "../ui/spinner";

function Mainform() {
  const [page, setPage] = useState(0);

  const components = [
    { Component: Name, name: "name", title: "Name" },
    { Component: Mail, name: "email", title: "Email" },
    { Component: Phone, name: "phone", title: "Phone Number" },
    { Component: Roll, name: "roll", title: "Roll Number" },
    { Component: TryHackId, name: "tryhackmeId", title: "Try hack me Id" },
    { Component: Year, name: "year", title: "Year" },
    { Component: Rate, name: "rate", title: "Experience" },
  ];

  const router = useRouter();

  const [formData, setFormData] = useState<User>({
    name: "",
    email: "",
    phone: "",
    roll: "",
    tryhackmeId: "",
    year: "1",
    rate: "beginner",
  });

  const [errors, SetError] = useState<ZodError | null>(null);
  const [submitting, SetSubmitting] = useState<boolean>(false);

  const PageDisplay = () => {
    const Component = components[page].Component;
    return (
      <Component
        name={components[page].name}
        issues={errors}
        formData={formData}
        handleChange={handleChange}
        key={page}
      />
    );
  };

  const validateSinglePage = () => {
    const fieldToValidate = components[page].name;
    const fieldValue = formData[fieldToValidate as keyof User];

    const schema = z.object({
      [fieldToValidate]: UserSchema.shape[fieldToValidate as keyof User],
    });

    const result = schema.safeParse({ [fieldToValidate]: fieldValue });

    if (!result.success) {
      SetError(result.error);
      return;
    }
    return result;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const progress = (page / (components.length - 1)) * 100;

  const formSubmit = async () => {
    SetSubmitting(true);
    const result = UserSchema.safeParse(formData);

    if (!result.success) {
      SetError(result.error);
      return;
    }

    const res = await CreateUser(result.data);

    if (res.success) {
      toast.success("Successfully Applied!");
      router.push("/outro");
    } else {
      toast.error(res.error.message);
    }
    SetSubmitting(false);
  };

  const nextPage = () => {
    const result = validateSinglePage();
    if (!result?.success) {
    } else {
      SetError(null);
      setPage((currPage) => currPage + 1);
    }
  };
  const previousPage = () => {
    SetError(null);
    setPage((currPage) => currPage - 1);
  };

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        if (page === components.length - 1) {
          formSubmit();
        } else {
          nextPage();
        }
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [page]);

  return (
    <div className="flex w-full h-full">
      <div className="w-full absolute overflow-hidden z-20 bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
        <div
          className="bg-primary-color h-1.5 rounded-full dark:bg-green-500 transition-all ease-linear"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <form
        action={formSubmit}
        className="w-full pr-8 absolute flex justify-center overflow-hidden top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
      >
        <motion.div
          key={page}
          layoutId="card"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{
            type:"spring",
            duration: 1,
            // when: "beforeChildren", // Animate the parent div first
          }}
        >
          <Card className="px-5  bg-black border-none overflow-hidden">
            <motion.div
              initial={{ opacity: 0, x: 100 }} // Initial state with opacity 0 and x position 100 (off-screen to the right)
              animate={{ opacity: 1, x: 0 }} // Animation to make the content appear with opacity 1 and x position 0
              exit={{ opacity: 0, x: -50 }}
              transition={{ 
                type:"spring",
                duration: 1 }} // Transition duration for the animation
            >
              <div className="">
                <CardHeader>
                  <CardTitle className="flex text-white items-center">
                    <span className="text-xs md:text-lg">{page + 1}</span>
                    <span>
                      <Image
                        src={"/asstes/icons/arrow-white2.png"}
                        alt="arrow"
                        height={10}
                        width={15}
                      />
                    </span>
                    <span className="text-lg mx-2 md:text-2xl font-normal">
                      {components[page].title}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>{PageDisplay()}</CardContent>
                <CardFooter className="flex gap-5 sm:gap-10 ">
                  <Button
                    size="sm"
                    disabled={page === 0}
                    className="bg-transparent text-white"
                    onClick={previousPage}
                  >
                    Go Back
                  </Button>
                  <Button
                    size="sm"
                    className="bg-primary-color hover:bg-primary-color/70 text-white"
                    type={page === components.length - 1 ? "submit" : "button"}
                    onClick={() => {
                      if (page === components.length - 1) {
                      } else {
                        nextPage();
                      }
                    }}
                  >
                    {page === components.length - 1 ? "Submit" : "Next"}
                    {submitting && <Spinner />}
                  </Button>
                </CardFooter>
              </div>
            </motion.div>
          </Card>
        </motion.div>
      </form>
    </div>
  );
}

export default Mainform;
