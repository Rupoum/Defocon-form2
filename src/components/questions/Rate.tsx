import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { User } from "@/lib/types";
import { ZodError } from "zod";

type Props = {};

function Rate({
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
      <Label className="text-white mb-2 md:text-lg" htmlFor="link">
        How well are you acquainted with cybersecurity ?
      </Label>
      <RadioGroup
        defaultValue="beginner"
        value={formData[name]}
        onValueChange={(value) => handleChange({ target: { name, value } })}
      >
        <div className="flex items-center mt-5 space-x-2">
          <RadioGroupItem value="beginner" id="rate" className="bg-white" />
          <Label htmlFor="beginner" className="text-white md:text-base">
            Beginner
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="advanced" id="rate" className="bg-white" />
          <Label htmlFor="advanced" className="text-white md:text-base">
            Advanced
          </Label>
        </div>
      </RadioGroup>
      {issues &&
        issues.issues.map((issue) => (
          <p className="text-red-800 text-xs md:text-base" key={issue.code}>
            {issue.message}
          </p>
        ))}
    </div>
  );
}

export default Rate;
