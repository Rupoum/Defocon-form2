import React from "react";

import TextField from "@mui/material/TextField";
type Props = {};

const Name = ({
  handleChange,
}: {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="relative ">
      <input
        type="text"
        onChange={handleChange}
        name="name"
        id="name"
        placeholder="Type ypur name here .."
        className="border-b w-96 focus:outline-none py-1 focus:border-b-2 peer text-white bg-black"
      />
      {/* <label htmlFor="name" className='text-slate-500  absolute left-0 font-light cursor-text peer-focus:text-sm peer-focus:-top-4 transition-all duration-300'>Type your name here</label> */}
    </div>
  );
};
export default Name;
