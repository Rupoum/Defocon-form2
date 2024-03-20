import { User } from "@/lib/types";
import React from "react";

type Props = {};

function Phone({
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
        type="tel"
        value={formData.phone}
        name="phone"
        id="phone"
        placeholder="Type your phone no  here .."
        className="border-b w-72 sm:w-96 focus:outline-none py-1 focus:border-b-2 peer text-white bg-black"
      />
    </div>
  );
}

export default Phone;
