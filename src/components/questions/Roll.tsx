import { User } from "@/lib/types";
import React from "react";
import { ZodError } from "zod";
import Input from "../ui/input";

type Props = {};

function Roll({
  handleChange,
  formData,
  issues,
  name,
}: {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  formData: User;
  issues: ZodError | null;
  name: string;
}) {
  return (
    <div>
      <Input
        onChange={handleChange}
        type="number"
        value={formData[name]}
        name={name}
        id={name}
        placeholder="Type your roll no  here .."
      />
      {issues &&
        issues.issues.map((issue) => (
          <p className="text-red-800" key={issue.code}>
            {issue.message}
          </p>
        ))}
    </div>
  );
}

export default Roll;
