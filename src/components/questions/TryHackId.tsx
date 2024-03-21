import { User } from "@/lib/types";
import React from "react";
import { ZodError } from "zod";

type Props = {};

function TryHackId({
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
      <input
        autoFocus
        onChange={handleChange}
        type="url"
        name={name}
        id={name}
        value={formData[name]}
        placeholder=" TryHackMe Id if you have .."
        className="border-b w-72 sm:w-96 focus:outline-none py-1 focus:border-b-2 peer text-white bg-black"
      />
      {issues &&
        issues.issues.map((issue) => (
          <p className="text-red-800 text-xs md:text-base" key={issue.code}>
            {issue.message}
          </p>
        ))}
    </div>
  );
}

export default TryHackId;
