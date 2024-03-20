import { User } from "@/lib/types";
import React from "react";

type Props = {};

function Roll({
  handleChange,
  formData,
}: {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  formData: User;
}) {
  return (
    <div>
      <input
        onChange={handleChange}
        type="number"
        value={formData.roll}
        name="roll"
        id="roll"
        placeholder="Type your roll no  here .."
        className="border-b w-96 focus:outline-none py-1 focus:border-b-2 peer text-white bg-black"
      />
    </div>
  );
}

export default Roll;
