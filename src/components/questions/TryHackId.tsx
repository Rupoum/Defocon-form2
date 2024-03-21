import { User } from "@/lib/types";
import React from "react";
import { ZodError } from "zod";
import Input from "../ui/input";

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
      <Input
        onChange={handleChange}
        type="url"
        name={name}
        id={name}
        value={formData[name]}
<<<<<<< HEAD
        placeholder="Type your TryHackMe Id here .."
=======
        placeholder=" TryHackMe Id if you have .."
        className="border-b w-72 sm:w-96 focus:outline-none py-1 focus:border-b-2 peer text-white bg-black"
>>>>>>> 3d3fb5e42d08c6175e078f6f83df78d021a21426
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
