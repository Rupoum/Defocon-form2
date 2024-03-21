import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ZodError } from "zod";
import { User } from "@/lib/types";

type Props = {};

function Year({
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
      <Select
        value={formData.year}
        onValueChange={(value) => handleChange({ target: { name, value } })}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select your current year" />
        </SelectTrigger>
        <SelectContent>
          {[1, 2, 3, 4].map((year) => {
            return (
              <SelectItem key={year} value={year.toString()}>
                Year {year}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
      {issues &&
        issues.issues.map((issue) => (
          <p className="text-red-800" key={issue.code}>
            {issue.message}
          </p>
        ))}
    </div>
  );
}

export default Year;
