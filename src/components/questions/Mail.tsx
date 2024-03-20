import React from "react";

type Props = {};

const Mail = ({
  handleChange,
}: {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div>
      <input
        type="email"
        name="email"
        id="email"
        onChange={handleChange}
        placeholder="Type ypur email here .."
        className="border-b w-96 focus:outline-none py-1 focus:border-b-2 peer text-white bg-black"
      />
    </div>
  );
};

export default Mail;
