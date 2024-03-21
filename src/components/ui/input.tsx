import { User } from "@/lib/types";
import React from "react";
import { ZodError } from "zod";

const Input = ({
  onChange,
  type,
  value,
  name,
  id,
  placeholder,
}: {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  type: string;
  value: string;
  id: string;
  placeholder: string;
}) => {
  return (
    <input
      id={id}
      type={type}
      autoComplete="false"
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="border-b md:w-[500px] w-full sm:w-96 min-[375px]:w-72 focus:outline-none md:text-xl  py-1 focus:border-b-2 peer text-white bg-transparent"
    />
  );
};

export default Input;
