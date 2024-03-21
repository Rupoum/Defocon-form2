import React from "react";

import TextField from "@mui/material/TextField";
import { User } from "@/lib/types";
import { ZodError } from "zod";
type Props = {};

const Name = ({
  handleChange,
  formData,
  issues,
  name,
}: {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  formData: User;
  issues: ZodError | null;
  name: string;
}) => {
  return (
    <div className="relative ">
      <input
    autoComplete="off"
        type="text"
        onChange={handleChange}
        name={name}
        id={name}
        value={formData[name]}
        placeholder="Type your name here .."
        className="border-b w-72 sm:w-96 focus:outline-none py-1 md:text-xl focus:border-b-2 peer text-white bg-transparent"
      />
      {issues &&
        issues.issues.map((issue) => (
          <p className="text-red-800 text-xs md:text-base" key={issue.code}>
            {issue.message}
          </p>
        ))}
    </div>
  );
};
export default Name;
