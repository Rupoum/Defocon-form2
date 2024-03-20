import { User } from "@/lib/types";
import React from "react";

type Props = {};

const Mail = ({
  handleChange,
  formData,
}: {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  formData: User;
}) => {
  return (
    <div>
      <input
        type="email"
        name="email"
        id="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Type ypur email here .."
        className="border-b w-72 sm:w-96 focus:outline-none  py-1 focus:border-b-2 peer text-white bg-transparent"
      />
    </div>
  );
};

export default Mail;
