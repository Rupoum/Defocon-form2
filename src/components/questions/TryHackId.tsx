import { User } from "@/lib/types";
import React from "react";

type Props = {};

function TryHackId({
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
        type="url"
        name="id"
        id="id"
        value={formData.name}
        placeholder="Type your roll no  here .."
        className="border-b w-96 focus:outline-none py-1 focus:border-b-2 peer text-white bg-black"
      />
    </div>
  );
}

export default TryHackId;
