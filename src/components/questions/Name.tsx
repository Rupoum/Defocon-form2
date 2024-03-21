import React from "react";

import TextField from "@mui/material/TextField";
import { User } from "@/lib/types";
import { ZodError } from "zod";
import Input from "../ui/input";
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
      <Input
        type="text"
        onChange={handleChange}
        name={name}
        id={name}
        value={formData[name]}
        placeholder="Type your name here .."
      />
      {issues &&
        issues.issues.map((issue) => (
          <p className="text-red-800" key={issue.code}>
            {issue.message}
          </p>
        ))}
    </div>
  );
};
export default Name;
