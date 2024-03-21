import { User } from "@/lib/types";
import React from "react";
import { z, ZodError } from "zod";
import Input from "../ui/input";

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
      <Input
        type="email"
        name={name}
        id={name}
        value={formData[name]}
        onChange={handleChange}
        placeholder="Type your email here .."
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
