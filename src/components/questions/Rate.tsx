import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

type Props = {};

function Rate({}: Props) {
  return (
    <div>
      <Label className="text-white" htmlFor="link">
        How well are you acquainted with cybersecurity ?
      </Label>
      <RadioGroup defaultValue="option-one">
        <div className="flex items-center space-x-2">
          <RadioGroupItem
            value="option-one"
            id="option-one"
            className="bg-white"
          />
          <Label htmlFor="option-one" className="text-white">
            Beginner
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem
            value="option-two"
            id="option-two"
            className="bg-white"
          />
          <Label htmlFor="option-two" className="text-white">
            Advanced
          </Label>
        </div>
      </RadioGroup>
    </div>
  );
}

export default Rate;
