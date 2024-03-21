import { User } from "@/lib/types";
import React from "react";
import { z, ZodError } from "zod";

const Mail = ({
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
    <div>
      <input
    autoComplete="off"
        type="email"
        name={name}
        id={name}
        value={formData[name]}
        onChange={handleChange}
        placeholder="Type your email here .."
        className="border-b w-72 sm:w-96 focus:outline-none md:text-xl py-1 focus:border-b-2 peer text-white bg-transparent"
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

export default Mail;
