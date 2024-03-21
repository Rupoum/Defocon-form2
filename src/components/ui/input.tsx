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
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="border-b w-full focus:outline-none md:text-xl  py-1 focus:border-b-2 peer text-white bg-transparent"
    />
  );
};

export default Input;
