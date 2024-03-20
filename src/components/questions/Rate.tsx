import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

type Props = {};

function Rate({
  handleChange,
}: {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div>
      <Label className="text-white" htmlFor="link">
        How well are you acquainted with cybersecurity ?
      </Label>
      <RadioGroup defaultValue="beginner">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="beginner" id="rate" className="bg-white" />
          <Label htmlFor="beginner" className="text-white">
            Beginner
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="advanced" id="rate" className="bg-white" />
          <Label htmlFor="advanced" className="text-white">
            Advanced
          </Label>
        </div>
      </RadioGroup>
    </div>
  );
}

export default Rate;
